import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogin } from './user-login.component';

describe('UserLogin', () => {
  let component: UserLogin;
  let fixture: ComponentFixture<UserLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
