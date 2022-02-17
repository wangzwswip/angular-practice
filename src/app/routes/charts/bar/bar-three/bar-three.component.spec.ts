import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThreeComponent } from './bar-three.component';

describe('BarThreeComponent', () => {
  let component: BarThreeComponent;
  let fixture: ComponentFixture<BarThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
