import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseThreeComponent } from './base-three.component';

describe('BaseThreeComponent', () => {
  let component: BaseThreeComponent;
  let fixture: ComponentFixture<BaseThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
