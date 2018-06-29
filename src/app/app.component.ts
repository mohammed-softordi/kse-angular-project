import { Component } from '@angular/core';
import '@webcomponents/webcomponentsjs/webcomponents-loader'
import '@polymer/polymer/polymer-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/icon-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App using KSE common icon component';
}
