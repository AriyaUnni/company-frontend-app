import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsecurityComponent } from './searchsecurity.component';

describe('SearchsecurityComponent', () => {
  let component: SearchsecurityComponent;
  let fixture: ComponentFixture<SearchsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
