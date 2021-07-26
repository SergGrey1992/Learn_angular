import {Directive, ElementRef, Renderer2} from "@angular/core";
//ng g d style2 --skipTests
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
    //elRef.nativeElement.style.color = 'red'
  }
}
