import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'

const modules = [
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
