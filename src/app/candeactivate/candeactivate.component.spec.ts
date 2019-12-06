import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandeactivateComponent } from './candeactivate.component';

describe('CandeactivateComponent', () => {
  let component: CandeactivateComponent;
  let fixture: ComponentFixture<CandeactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandeactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
