import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import '@webcomponents/webcomponentsjs/webcomponents-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FleetPositionComponent } from './fleet-position/fleet-position.component';
import { ServicePlanningComponent } from './service-planning/service-planning.component';
import { DriverEvaluationComponent } from './driver-evaluation/driver-evaluation.component';
import { VehiclePerformanceComponent } from './vehicle-performance/vehicle-performance.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FleetPositionComponent,
    ServicePlanningComponent,
    DriverEvaluationComponent,
    VehiclePerformanceComponent,
    AdministrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
