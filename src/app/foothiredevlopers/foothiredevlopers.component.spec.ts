import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoothiredevlopersComponent } from './foothiredevlopers.component';

describe('FoothiredevlopersComponent', () => {
  let component: FoothiredevlopersComponent;
  let fixture: ComponentFixture<FoothiredevlopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoothiredevlopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoothiredevlopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
