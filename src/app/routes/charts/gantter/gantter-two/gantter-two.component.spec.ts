import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantterTwoComponent } from './gantter-two.component';

describe('GantterTwoComponent', () => {
  let component: GantterTwoComponent;
  let fixture: ComponentFixture<GantterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
