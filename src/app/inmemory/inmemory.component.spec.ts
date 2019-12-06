import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmemoryComponent } from './inmemory.component';

describe('InmemoryComponent', () => {
  let component: InmemoryComponent;
  let fixture: ComponentFixture<InmemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
