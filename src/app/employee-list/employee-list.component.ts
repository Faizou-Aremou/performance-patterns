import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'immutable';

import { EmployeeData } from '../shared/list-generator.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h1 title="Department">{{ department }}</h1>
    <app-name-input (add)="add.emit($event)"></app-name-input>
    <app-list [data]="data" (remove)="remove.emit($event)"></app-list>
  `,
  styleUrls: ['employee-list.component.css'],
})
export class EmployeeListComponent {
  @Input() department: string = '';
  @Input() data: List<EmployeeData> | null = null;
  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
}
