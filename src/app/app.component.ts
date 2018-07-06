import { Component } from '@angular/core';
import '@polymer/polymer/polymer-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/icon-toggle';
import 'kse-common-ui/ks-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KSE Angular2 project using component from kse-common-ui toolbox';
  searchCriteria = 'Demo';

}
