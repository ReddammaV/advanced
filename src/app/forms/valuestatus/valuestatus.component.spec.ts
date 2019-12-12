import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuestatusComponent } from './valuestatus.component';

describe('ValuestatusComponent', () => {
  let component: ValuestatusComponent;
  let fixture: ComponentFixture<ValuestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
