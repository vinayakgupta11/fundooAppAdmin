import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedAnsComponent } from './unapproved-ans.component';

describe('UnapprovedAnsComponent', () => {
  let component: UnapprovedAnsComponent;
  let fixture: ComponentFixture<UnapprovedAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
