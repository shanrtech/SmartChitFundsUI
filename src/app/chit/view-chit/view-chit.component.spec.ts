import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChitComponent } from './view-chit.component';

describe('ViewChitComponent', () => {
  let component: ViewChitComponent;
  let fixture: ComponentFixture<ViewChitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
