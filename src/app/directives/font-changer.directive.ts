import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {

  @Input() fontColor: string;

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
    this.elementRef.nativeElement.style.color = color;
  }

  private changeFontFamily(fontFamility: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', fontFamility);
  }

}
