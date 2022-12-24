import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTeglineComponent } from './why-tegline.component';

describe('WhyTeglineComponent', () => {
  let component: WhyTeglineComponent;
  let fixture: ComponentFixture<WhyTeglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTeglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTeglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
