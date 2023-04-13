import { Component, OnInit } from '@angular/core';

import { RoutesService } from 'src/app/services/routes.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menu: Array<any>;

  constructor(_routesService: RoutesService) {
    this.menu = _routesService.menu;
  }

  ngOnInit(): void { }

}