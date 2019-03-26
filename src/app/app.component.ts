import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Angular Universal Demo');
    meta.addTags([
      { name: 'author', content: 'Garfield' },
      { name: 'keywords', content: 'angular, universal' }
    ]);
  }
}
