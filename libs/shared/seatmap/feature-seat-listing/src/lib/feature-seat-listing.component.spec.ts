import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSeatListingComponent } from './feature-seat-listing.component';

describe('FeatureSeatListingComponent', () => {
  let component: FeatureSeatListingComponent;
  let fixture: ComponentFixture<FeatureSeatListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSeatListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSeatListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
