import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() headers: Array<string>;
  @Input() data: Array<Array<any>>;

  constructor() {
    this.headers = [];
    this.data = [];
  }

  ngOnInit(): void { }
}