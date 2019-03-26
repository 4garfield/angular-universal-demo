import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, pathMatch: 'full' }
    ])
  ]
})
export class HomeRoutingModule {}
