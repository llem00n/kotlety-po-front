import { Component } from '@angular/core';
export interface SearchBarComponent {
  name: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  value = 'Clear me';
}

