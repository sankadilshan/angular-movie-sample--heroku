import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilComponent } from './tamil.component';

describe('TamilComponent', () => {
  let component: TamilComponent;
  let fixture: ComponentFixture<TamilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
