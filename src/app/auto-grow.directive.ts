import {Component, Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[autoGrow]', 
  host: { 
    '(focus)': 'onFocus()', //call onFocus function
    '(blur)': 'onBlur()' // call onBlur function
  }
})

export class AutoGrowDirective {

  
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '300px')
  }

  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '150px')
  }
}
