import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ItemsGridComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [SearchBarComponent]
})
export class MainPageModule { }
