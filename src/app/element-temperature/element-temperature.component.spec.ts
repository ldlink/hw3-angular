import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTemperatureComponent } from './element-temperature.component';

describe('ElementTemperatureComponent', () => {
  let component: ElementTemperatureComponent;
  let fixture: ComponentFixture<ElementTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
