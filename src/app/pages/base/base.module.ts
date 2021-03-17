import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './base.component';
import {BaseRoutingModule} from './base-routing.module';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    BaseRoutingModule,
    CommonModule
  ],
  exports: [BaseComponent]
})
export class BaseModule { }
