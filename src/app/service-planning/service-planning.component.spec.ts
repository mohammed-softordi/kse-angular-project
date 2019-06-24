import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePlanningComponent } from './service-planning.component';

describe('ServicePlanningComponent', () => {
  let component: ServicePlanningComponent;
  let fixture: ComponentFixture<ServicePlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
