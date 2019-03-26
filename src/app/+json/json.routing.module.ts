import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonComponent } from './json.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'json', component: JsonComponent, pathMatch: 'full' }
    ])
  ]
})
export class JsonRoutingModule {}
