import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUtilFormattersComponent } from './store-util-formatters.component';

describe('StoreUtilFormattersComponent', () => {
  let component: StoreUtilFormattersComponent;
  let fixture: ComponentFixture<StoreUtilFormattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreUtilFormattersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreUtilFormattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
