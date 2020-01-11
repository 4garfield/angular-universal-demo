import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonComponent } from './json.component';
import { JsonRoutingModule } from './json.routing.module';

@NgModule({
  imports: [
    CommonModule,
    JsonRoutingModule
  ],
  declarations: [
    JsonComponent
  ]
})
export class JsonModule { }
