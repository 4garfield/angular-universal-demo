// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { Api } from './api';
import { ROUTES } from './routes';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 3002;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

function cacheControl(req, res, next) {
  res.header('Cache-Control', 'max-age=60');
  next();
}
// Server static files
app.get('*.*', cacheControl, express.static(join(DIST_FOLDER, 'browser'), { index: false }));

const api = new Api();
app.get('/api/json', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.json(api.getJson());
  console.timeEnd(`GET: ${req.originalUrl}`);
});

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('index', {
      req: req,
      res: res,
      time: true // use this to determine what part of your app is slow, only in development
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/client', (req, res) => {
  console.log('direct CSR route');
  console.time(`GET: ${req.originalUrl}`);
  res.sendFile('index.html', {root: 'dist/browser'});
  console.timeEnd(`GET: ${req.originalUrl}`);
});

// catch 404
app.use(function(req, res, next) {
  res.status(404);
  res.json({msg: 'Request Resource Not Found'});
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({msg: err.message});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
