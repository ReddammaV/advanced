import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalvalidatorComponent } from './conditionalvalidator.component';

describe('ConditionalvalidatorComponent', () => {
  let component: ConditionalvalidatorComponent;
  let fixture: ComponentFixture<ConditionalvalidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalvalidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
