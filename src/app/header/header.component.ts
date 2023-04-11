import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  //standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('container', { read: ViewContainerRef}) container!: ViewContainerRef;
  @ViewChild('app-header') headerTemplate!: TemplateRef<any>;

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.headerTemplate);
  }
}
