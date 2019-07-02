import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAboutComponent } from './element-about.component';

describe('ElementAboutComponent', () => {
  let component: ElementAboutComponent;
  let fixture: ComponentFixture<ElementAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
