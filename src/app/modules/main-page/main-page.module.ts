import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ItemsGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    ItemsGridComponent
  ]
})
export class MainPageModule { }
