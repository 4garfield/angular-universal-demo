import { APP_ID, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'home-view',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
    this.title = 'ftw';
  }

  ngOnInit() {
    // not recommend, just for integrating with old style code.
    if (isPlatformBrowser(this.platformId)) {
      let element = document.getElementById('two-way');
      element.setAttribute("style", "color: green; font-weight: bold;");
      console.log('browser only code');
    }
    if (isPlatformServer(this.platformId)) {
      console.log('server only code');
    }
    console.log(`appId: ${this.appId}`);
  }
}
