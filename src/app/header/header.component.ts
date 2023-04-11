import { Component, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @ViewChild('container', { read: ViewContainerRef}) container!: ViewContainerRef;
  @ViewChild('app-header') headerTemplate!: TemplateRef<any>;

  renderTemplate() {
    const embeddedViewRef = this.container.createEmbeddedView(this.headerTemplate);
    // prevents change detection errors
    embeddedViewRef.detectChanges();
    this.renderTemplate();

  /*OnInit() {
    this.container.createEmbeddedView(this.headerTemplate);
    this.renderTemplate();
  }
  
  AfterViewInit() {
    this.renderTemplate();
  }
}*/
  }}
