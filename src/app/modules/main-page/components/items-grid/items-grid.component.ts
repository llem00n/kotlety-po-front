import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss']
})
export class ItemsGridComponent implements AfterViewInit {
  @Input() events: Event[] = [];
  @Input() width?: string;
  imagesUrl: string;

  @ViewChild('main') mainElement?: ElementRef<HTMLDivElement>;
  @ViewChild('items') itemsElement?: ElementRef<HTMLDivElement>;

  constructor() {
    this.imagesUrl = `${environment.baseUrl}/images/`;
  }

  ngAfterViewInit() {
    if (!this.width || !this.mainElement) return;

    this.mainElement.nativeElement.style.setProperty('--full-width', this.width);
  }

  leftClick() {
    this.itemsElement?.nativeElement.scrollBy({ behavior: 'smooth', left: -300 });
  }

  rightClick() {
    this.itemsElement?.nativeElement.scrollBy({ behavior: 'smooth', left: 300 });
  }
}
