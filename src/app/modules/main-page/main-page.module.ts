import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ItemsGridComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ItemsGridComponent,
    SearchBarComponent
  ]
})
export class MainPageModule { }
