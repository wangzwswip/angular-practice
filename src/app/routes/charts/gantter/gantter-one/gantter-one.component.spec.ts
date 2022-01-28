import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantterOneComponent } from './gantter-one.component';

describe('GantterOneComponent', () => {
  let component: GantterOneComponent;
  let fixture: ComponentFixture<GantterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
