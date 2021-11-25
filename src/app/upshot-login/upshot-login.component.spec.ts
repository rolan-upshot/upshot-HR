import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpshotLoginComponent } from './upshot-login.component';

describe('UpshotLoginComponent', () => {
  let component: UpshotLoginComponent;
  let fixture: ComponentFixture<UpshotLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpshotLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpshotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
