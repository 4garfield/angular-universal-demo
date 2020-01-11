import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
  ],
})
export class AppServerModule { }
