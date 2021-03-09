import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nappsAdminModelling';

  ngOnInit() {
    AOS.init(); // intializing animation on scroll
    }
}
