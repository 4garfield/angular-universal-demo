import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PrebootModule } from 'preboot';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './+home/home.module';
import { JsonModule } from './+json/json.module';
import { AboutModule } from './+about/about.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-universal-demo-app'
    }),
    PrebootModule.withConfig({ appRoot: 'app' }),
    BrowserTransferStateModule,
    HttpClientModule,
    TransferHttpCacheModule,
    HomeModule,
    JsonModule,
    AboutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [AppComponent]
})
export class AppModule { }
