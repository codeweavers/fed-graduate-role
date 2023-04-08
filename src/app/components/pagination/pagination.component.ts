import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit{
  constructor(){}

@Input() totalAmount: number 

  // takes the page number 
ngOnInit():void{}

}
