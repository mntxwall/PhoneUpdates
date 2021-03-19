import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './base.component';
import {BaseRoutingModule} from './base-routing.module';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';



import { SearchOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ SearchOutline ];


@NgModule({
  declarations: [BaseComponent],
  imports: [
    BaseRoutingModule,
    CommonModule,
    NzUploadModule,
    NzInputModule,
    FormsModule,
    NzAutocompleteModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [BaseComponent]
})
export class BaseModule { }
