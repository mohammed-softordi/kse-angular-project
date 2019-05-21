import { Component } from '@angular/core';

import 'kse-common-ui/ks-nav-item';
import 'kse-common-ui/ks-main-content';
import 'kse-common-ui/ks-main-header';
import 'kse-common-ui/ks-main-footer';
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
  title = 'KS Angular2 project';
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
