import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { EmployeeListComponent } from './employee-list.component';
import { NameInputComponent } from './name-input/name-input.component';
import { ListComponent } from './list/list.component';
import { CalulatePipe } from '../calulate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ScrollingModule
  ],
  declarations: [EmployeeListComponent, NameInputComponent, ListComponent, CalulatePipe],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule {}
