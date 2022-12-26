import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootservicesComponent } from './footservices.component';

describe('FootservicesComponent', () => {
  let component: FootservicesComponent;
  let fixture: ComponentFixture<FootservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
