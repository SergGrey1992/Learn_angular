import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";
//ng g d style2 --skipTests
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    //this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
    //elRef.nativeElement.style.color = 'red'
  }

  @HostListener('click', ['$event.target']) onClick (event: Event) {
    //console.log(event)
  }
  @HostListener('mouseenter') onMouseEnter () {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }
}
