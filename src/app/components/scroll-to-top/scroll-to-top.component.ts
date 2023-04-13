import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  public windowScrolled!: boolean;

  constructor() { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  public onWindowScroll(): void {
    if (document.documentElement.scrollTop) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}