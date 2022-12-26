import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhrComponent } from './footerhr.component';

describe('FooterhrComponent', () => {
  let component: FooterhrComponent;
  let fixture: ComponentFixture<FooterhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterhrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
