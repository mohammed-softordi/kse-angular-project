import { Component } from '@angular/core';

import 'kse-common-ui/ks-nav-item';
import 'kse-common-ui/ks-main-content';
import 'kse-common-ui/ks-main-header';
import 'kse-common-ui/ks-main-footer';
import 'kse-common-ui/ks-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KS Angular2 project';
  searchCriteria = 'Demo';
}
