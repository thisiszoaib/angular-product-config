import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPreviewComponent } from './product-preview.component';

describe('ProductPreviewComponent', () => {
  let component: ProductPreviewComponent;
  let fixture: ComponentFixture<ProductPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
