import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[lwlShadowScroll]'
})
export class ShadowScrollDirective {

  constructor(public el: ElementRef) { }

  @HostListener('scroll')
  onscroll() {
    if (this.el.nativeElement.scrollTop === 0) {
      this.el.nativeElement.style.boxShadow = 'none';
      this.el.nativeElement.style.borderTop = '1px solid #ddd';
    }
    else {
      this.el.nativeElement.style.boxShadow = 'inset 1px 4px 9px -6px';
      this.el.nativeElement.style.borderTop = '1px transparent';
    }
  }
  
}
