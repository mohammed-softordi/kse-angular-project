import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetPositionComponent } from './fleet-position.component';

describe('FleetPositionComponent', () => {
  let component: FleetPositionComponent;
  let fixture: ComponentFixture<FleetPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
