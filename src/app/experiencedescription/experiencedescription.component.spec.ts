import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedescriptionComponent } from './experiencedescription.component';

describe('ExperiencedescriptionComponent', () => {
  let component: ExperiencedescriptionComponent;
  let fixture: ComponentFixture<ExperiencedescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencedescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
