import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingUpComponent } from './comming-up.component';

describe('CommingUpComponent', () => {
  let component: CommingUpComponent;
  let fixture: ComponentFixture<CommingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
