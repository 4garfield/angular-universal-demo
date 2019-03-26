import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModule } from './+lazy/lazy.module';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, {
    path: 'lazy',
    loadChildren: './+lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
