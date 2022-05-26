import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectParentStrictComponent } from './select-parent-strict.component';

describe('SelectParentStrictComponent', () => {
  let component: SelectParentStrictComponent;
  let fixture: ComponentFixture<SelectParentStrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectParentStrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectParentStrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
