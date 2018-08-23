import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';
import { IgxColumnComponent } from 'igniteui-angular';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.css']
})
export class NewGridComponent implements OnInit {
  public localData: any[];
  title = 'newGrid';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
