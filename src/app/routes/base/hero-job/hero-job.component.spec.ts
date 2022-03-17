import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobComponent } from './hero-job.component';

describe('HeroJobComponent', () => {
  let component: HeroJobComponent;
  let fixture: ComponentFixture<HeroJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
