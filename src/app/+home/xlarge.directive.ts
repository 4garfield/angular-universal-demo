import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer2-
    // for webworker/server to see the changes
    renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
  }
}
