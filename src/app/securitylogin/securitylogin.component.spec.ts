import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityloginComponent } from './securitylogin.component';

describe('SecurityloginComponent', () => {
  let component: SecurityloginComponent;
  let fixture: ComponentFixture<SecurityloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
