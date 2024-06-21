import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUrlsComponent } from './banner-urls.component';

describe('BannerUrlsComponent', () => {
  let component: BannerUrlsComponent;
  let fixture: ComponentFixture<BannerUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerUrlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
