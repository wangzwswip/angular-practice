import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsSuperComponent } from './persons-super.component';

describe('PersonsSuperComponent', () => {
  let component: PersonsSuperComponent;
  let fixture: ComponentFixture<PersonsSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsSuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
