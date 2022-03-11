import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordeComponent } from './recorde.component';

describe('RecordeComponent', () => {
  let component: RecordeComponent;
  let fixture: ComponentFixture<RecordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
