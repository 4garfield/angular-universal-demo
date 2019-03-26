Minimal Angular Universal App

## Usage

1. clone project: `git clone git@github.com:4garfield/ng-universal-demo.git`
2. install dependencies: `cd ng-universal-demo & npm install`
3. build the app with server-side-rendering: `npm run build:ssr`
3. start app: `npm run serve:ssr`
4. open browser, navigate to `http://localhost:3002`

## Gotchas

* Route `/home` shows how the data-binding works in universal app and how to interact with Dom Element
* Route `/lazy` shows the lazy loading module
* Route `/json` shows get API data from server
* Route `/about` shows how universal app works together with angular animation

## Reference

* https://angular.io/guide/universal
