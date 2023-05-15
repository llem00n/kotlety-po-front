import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.png" (click)="reloadPage()" alt="logo" aria-hidden="true">
    <h1 class = text > pokyyivsʹki</h1>
    </header>
    <section class="content">
    <app-header></app-header>
    </section>
  </main>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kotlety-po-';
  reloadPage()
  {
    location.reload();
  }
}
