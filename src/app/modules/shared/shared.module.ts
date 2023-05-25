import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollHandlerDirective } from './directives/scroll-handler.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollHandlerDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollHandlerDirective,
  ]
})
export class SharedModule { }
