import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailPage2Component } from './productdetail-page2.component';

describe('ProductdetailPage2Component', () => {
  let component: ProductdetailPage2Component;
  let fixture: ComponentFixture<ProductdetailPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
