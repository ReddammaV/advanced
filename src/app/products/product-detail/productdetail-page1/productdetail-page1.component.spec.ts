import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailPage1Component } from './productdetail-page1.component';

describe('ProductdetailPage1Component', () => {
  let component: ProductdetailPage1Component;
  let fixture: ComponentFixture<ProductdetailPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
