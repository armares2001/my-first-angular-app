import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[test]',
})
export class TestDirective {
  @Input() test = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('directive');
    console.log(this.test);
  }
}
