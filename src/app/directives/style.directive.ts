import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";
//ng g d style2 --skipTests
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyle: {border?: string, fontWeight?: string, borderRadius?: string}

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    //this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
    //elRef.nativeElement.style.color = 'red'
  }

  @HostListener('click', ['$event.target']) onClick (event: Event) {
    //console.log(event)
  }
  @HostListener('mouseenter') onMouseEnter () {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyle.fontWeight)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyle.border)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
