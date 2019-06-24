import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePerformanceComponent } from './vehicle-performance.component';

describe('VehiclePerformanceComponent', () => {
  let component: VehiclePerformanceComponent;
  let fixture: ComponentFixture<VehiclePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
