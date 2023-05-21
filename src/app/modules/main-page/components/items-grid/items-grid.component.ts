import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { ScrollInfo } from 'src/app/modules/shared/directives/scroll-handler.directive';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
  animations: [
    trigger('showHide', [
      state('shown', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => shown', [animate('300ms')]),
      transition('shown => hidden', [animate('100ms')]),
    ])
  ]
})
export class ItemsGridComponent implements AfterViewInit {
  @Input() events: Event[] = [];
  @Input() width?: string;
  @Output() select = new EventEmitter<Event>();

  imagesUrl: string;
  scroll = { left: 0, right: 1 }

  @ViewChild('main') mainElement?: ElementRef<HTMLDivElement>;
  @ViewChild('items') itemsElement?: ElementRef<HTMLDivElement>;

  constructor() {
    this.imagesUrl = `${environment.baseUrl}/images/`;
  }

  ngAfterViewInit() {
    if (!this.width || !this.mainElement) return;

    this.mainElement.nativeElement.style.setProperty('--full-width', this.width);
  }

  navClick(direction: 'right' | 'left') {
    this.itemsElement?.nativeElement.scrollBy({ behavior: 'smooth', left: 300 * (direction == 'right' ? 1 : -1) });
  }

  itemClick(event: Event) {
    this.select.emit(event);
  }

  itemsScroll(event: ScrollInfo) {
    this.scroll = {
      left: event.left,
      right: event.right
    }
  }
}
