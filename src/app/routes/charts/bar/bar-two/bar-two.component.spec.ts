import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTwoComponent } from './bar-two.component';

describe('BarTwoComponent', () => {
  let component: BarTwoComponent;
  let fixture: ComponentFixture<BarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
