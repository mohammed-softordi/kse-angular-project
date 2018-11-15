import { Component } from '@angular/core';
import '@polymer/polymer/polymer-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/icon-toggle';
import 'kse-common-ui/ks-search';
import {initGCharts} from 'google-chart-polymer-3/google-chart';
/*import 'kse-common-ui/corporate-ui/corporate-header';
import 'kse-common-ui/corporate-ui/nav-item';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KSE Angular2 project using component from kse-common-ui toolbox';
  searchCriteria = 'Demo';

  initGCharts(()=>{
  var chart = document.getElementById('timeline');
  document.createElement('google-chart-loader').dataTable([
                                                            ['Name', 'Start', 'End'],
                                                            ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
                                                            ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                                                            ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
                                                          ]).then(function(dataTable) {
    chart.data = dataTable;
  });
})

}
