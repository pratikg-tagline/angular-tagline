import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootlastlineComponent } from './footlastline.component';

describe('FootlastlineComponent', () => {
  let component: FootlastlineComponent;
  let fixture: ComponentFixture<FootlastlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootlastlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootlastlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
