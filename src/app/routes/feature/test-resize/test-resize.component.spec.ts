import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResizeComponent } from './test-resize.component';

describe('TestResizeComponent', () => {
  let component: TestResizeComponent;
  let fixture: ComponentFixture<TestResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestResizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
