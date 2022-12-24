import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurglobalComponent } from './ourglobal.component';

describe('OurglobalComponent', () => {
  let component: OurglobalComponent;
  let fixture: ComponentFixture<OurglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurglobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
