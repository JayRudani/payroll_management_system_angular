import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalaryComponent } from './create-salary.component';

describe('CreateSalaryComponent', () => {
  let component: CreateSalaryComponent;
  let fixture: ComponentFixture<CreateSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
