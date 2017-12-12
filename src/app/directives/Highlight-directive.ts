import { Directive, HostListener, ElementRef, Input, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

    constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  OnMouseEnter() {
    const text = this.el.nativeElement.children[2].innerText;
 //   console.log(text);
    switch (text) {
      case '1' :
      case '2' :
      this.highlight('red');
      break;
      case '3' :
      case '4' :
        this.highlight('orange');
        break;
      case '5':
        this.highlight('blue');
        break;
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  // console.log(this.el.nativeElement.parentNode);
  }
}
