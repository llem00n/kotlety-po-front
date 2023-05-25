import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

export type ScrollInfo = {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

@Directive({
  selector: '[appScrollHandler]'
})
export class ScrollHandlerDirective {
  @Output() onScroll = new EventEmitter<ScrollInfo>();

  constructor() { }

  @HostListener('scroll', ['$event.target'])
  scrollCallback(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    this.onScroll.emit({
      top: el.scrollTop,
      bottom: el.scrollHeight - (rect.height + el.scrollTop),
      left: el.scrollLeft,
      right: el.scrollWidth - (rect.width + el.scrollLeft)
    });
  }
}
