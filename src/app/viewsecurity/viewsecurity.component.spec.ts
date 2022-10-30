import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecurityComponent } from './viewsecurity.component';

describe('ViewsecurityComponent', () => {
  let component: ViewsecurityComponent;
  let fixture: ComponentFixture<ViewsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
