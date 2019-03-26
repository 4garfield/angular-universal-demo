import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { XLargeDirective } from './xlarge.directive';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    XLargeDirective
  ]
})
export class HomeModule {}
