import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './+home/home.module';
import { JsonModule } from './+json/json.module';
import { AboutModule } from './+about/about.module';
import { ClientModule } from './+client/client.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ 
      appId: 'angular-universal-demo-app'
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    HomeModule,
    JsonModule,
    AboutModule,
    ClientModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
