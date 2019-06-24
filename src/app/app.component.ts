import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { Location } from '@angular/common';

import 'kse-common-ui/ks-nav-item';
import 'kse-common-ui/ks-main-content';
import 'kse-common-ui/ks-main-header';
import 'kse-common-ui/ks-main-footer';
import 'kse-common-ui/ks-main-navigation';
import 'kse-common-ui/ks-secondary-menu';
import 'kse-common-ui/ks-primary-menu';
import 'kse-common-ui/ks-secondary-menu-item';
import 'kse-common-ui/ks-device-menu';
import 'kse-common-ui/ks-nav-profile';
import 'kse-common-ui/ks-fullscreen';
import 'kse-common-ui/ks-search';
import {KsUtils} from 'kse-common-ui/helpers/ks-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                console.log('naivgation start', event);
                this.disableFullscreen = event.url.startsWith('/start')
                    || event.url == '/'
                    || event.url.startsWith('/administration')
                    || event.url.startsWith('/profile');
                this.disableHeader = event.url.startsWith('/positioning')
                    || event.url.startsWith('/driver-evaluation');
                this.disableFooter = event.url.startsWith('/positioning');
            }

            if (event instanceof NavigationEnd) {
                console.log('naivgation end');
                this.initMenu();
            }

            if (event instanceof NavigationError) {
                console.log('Navigation Error', event.error);
            }
        });
    }

    ngOnInit() {
    }

  title = 'KS Angular 6 project';
  siteUrl = '/';
  disableMenu = false;
  hideElements = ['.main-menu', 'secondary-menu']; // Added extra element to hide in fullscreen mode "ks-main-navigation" is hidden by default)
  disableFullscreen = false;
  disableHeader = false;
  disableFooter = false;
  primaryItems = this.primaryMenu();
  secondaryItems = this.secondaryMenu();
  accountItems = this.accountMenu();

  primaryMenu(){
      return [{id:"dashboard",title:"Start",link:"/start", active: false},
          {id:"fleetPosition-vehicle-map",title:"Fleet Position", link:"/positioning/fleet-position/map",active:false,
              items:[{title:"Map",link:"/positioning/fleet-position/map",active:false},
                  {title:"Vehicle",link:"/positioning/fleet-position/vehicle-list",active:false},
                  {link:"/positioning/fleet-position/event-list", title:"Event list",active:false}],"caption":"Fleet Position"},

          {id:"servicePlanning-toDo",title:"Service Planning",link:"/service-planning/to-do",active:false,
              items: [{title:"Todo",link:"/service-planning/to-do",active:false},
                  {link:"/service-planning/calendar",title:"calendar",active:false},
                  {title:"Rapport",link:"/service-planning/defect/list",active:false}],
              "caption":"Service Planning"},
          {id:"driverEvaluation-home",title:"driver evaluation",link:"/driver-evaluation/results",active:false,
              items:[
                  {title:"results",link:"/driver-evaluation/results",active:false},
                  {title:"fuel-consumption",link:"/driver-evaluation/fuel-consumption",active:false},
              ],"caption":"driver evaluation"},
          {id:"vehiclePerformance.overview",title:"vehicle performance",link:"/vehicle-performance/overview",active:false,
              items:[
                  {title:"Overview",link:"/vehicle-performance/overview",active:false},
                  {title:"details",link:"/vehicle-performance/details",active:false}
              ],"caption":"vehicle performance"}];
  }
  secondaryMenu() {
      return  [{link:"",title:"Administration",
          items:[{title:"Utrustning",link:"/administration/equipment",active:false},
              {title:"Adressbok",link:"/administration/address-book",active:false},
              {title:"Coachningsrapporter",link:"/administration/report",active:false},
              {title:"Körtid",link:"/administration/driving-time",active:false},
              {title:"Hjälp",link:"https://fmpnextgen.scania.com/#/help/dashboard",active:false}]}];
  }
  accountMenu(){
      return [{title: 'My profile', link: '/profile'}, {title: 'logout', link: '/logout'}];
  }
  clickHandler(event){
      var link = event.target.getAttribute('link');
      if(link.startsWith('http')){
          window.open(link, '_blank');
          return;
      }
      console.log('disableFullscreen', this.disableFullscreen);
      this.router.navigate([link]).then((result) => {
          if(result){
              this.initMenu();
          }
      });
  }

  initMenu(){
      this.primaryItems = this.secondaryItems = this.accountItems = [];
      this.primaryItems = KsUtils.activatedRoute(this.primaryMenu(), this.router.url);
      this.secondaryItems = KsUtils.activatedRoute(this.secondaryMenu(), this.router.url);
      this.accountItems = KsUtils.activatedRoute(this.accountMenu(), this.router.url);
  }

}
