import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string | undefined;

  constructor(private el: ElementRef) {}

  // click, change, keyup, blur, keydown, mouseenter, mouseleave

  // @HostListener('mouseenter') onMouseEnter = () => {
  //   console.log('apphighlight = ' + this.appHighlight);
  //   this.highlight('yellow');
  // };
  // @HostListener('mouseleave') onMouseLeave = () => {
  //   this.highlight('');
  // };

  @HostListener('mouseenter') onMouseEnter = () => {
    this.highlight(this.appHighlight ?? 'red');
  };

  @HostListener('mouseleave') onMouseLeave = () => {
    this.highlight('');
  };

  private highlight = (color: string) => {
    this.el.nativeElement.style.backgroundColor = color;
  };
}