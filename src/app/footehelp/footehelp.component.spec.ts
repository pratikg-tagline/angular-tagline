import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootehelpComponent } from './footehelp.component';

describe('FootehelpComponent', () => {
  let component: FootehelpComponent;
  let fixture: ComponentFixture<FootehelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootehelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
