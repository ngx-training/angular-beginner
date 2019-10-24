import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  @Input() fontColor: string = 'green';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeFontColor(this.fontColor);
    this.changeFontFamily('monospace');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeFontColor(null);
    this.changeFontFamily(null);
  }

  private changeFontColor(color: string) {
    if (color) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
    }
  }

  private changeFontFamily(fontFamily: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', fontFamily);
  }

}
