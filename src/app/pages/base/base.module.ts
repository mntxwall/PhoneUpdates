import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './base.component';
import {BaseRoutingModule} from './base-routing.module';
import {NzUploadModule} from 'ng-zorro-antd/upload';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    BaseRoutingModule,
    CommonModule,
    NzUploadModule
  ],
  exports: [BaseComponent]
})
export class BaseModule { }
