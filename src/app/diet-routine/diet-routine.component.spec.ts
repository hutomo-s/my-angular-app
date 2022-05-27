import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietRoutineComponent } from './diet-routine.component';

describe('DietRoutineComponent', () => {
  let component: DietRoutineComponent;
  let fixture: ComponentFixture<DietRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietRoutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
