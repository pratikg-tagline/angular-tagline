import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsclientComponent } from './wordsclient.component';

describe('WordsclientComponent', () => {
  let component: WordsclientComponent;
  let fixture: ComponentFixture<WordsclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
