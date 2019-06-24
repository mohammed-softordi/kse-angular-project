import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AdministrationComponent} from '../administration/administration.component';
import {FleetPositionComponent} from '../fleet-position/fleet-position.component';
import {DriverEvaluationComponent} from '../driver-evaluation/driver-evaluation.component';
import {ServicePlanningComponent} from '../service-planning/service-planning.component';
import {VehiclePerformanceComponent} from '../vehicle-performance/vehicle-performance.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'positioning/fleet-position/:?', component: FleetPositionComponent },
  { path: 'driver-evaluation/:?', component: DriverEvaluationComponent },
  { path: 'service-planning/:?', component: ServicePlanningComponent },
  { path: 'service-planning/defect/:?', component: ServicePlanningComponent },
  { path: 'vehicle-performance/:?', component: VehiclePerformanceComponent },
  { path: 'administration/:?', component: AdministrationComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
