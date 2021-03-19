import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {CommonModule} from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';


import { SearchOutline } from '@ant-design/icons-angular/icons';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {FormsModule} from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';

const icons: IconDefinition[] = [ SearchOutline ];


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzTableModule,
    NzDividerModule,
    CommonModule,
    NzIconModule.forRoot(icons),
    NzInputModule,
    NzAutocompleteModule,
    FormsModule,
    NzGridModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
