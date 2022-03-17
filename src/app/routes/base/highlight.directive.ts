import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({selector: '[appHighlight]'})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultColor = '';
  constructor(private el: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('输入的默认颜色', this.defaultColor)
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
