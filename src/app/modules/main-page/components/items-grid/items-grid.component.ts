import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss']
})
export class ItemsGridComponent {
  @Input() events: Event[] = [];
  imagesUrl: string;

  constructor() {
    this.imagesUrl = `${environment.baseUrl}/images`;
  }
}
