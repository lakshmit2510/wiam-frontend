import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAutorizedComponent } from './un-autorized.component';

describe('UnAutorizedComponent', () => {
  let component: UnAutorizedComponent;
  let fixture: ComponentFixture<UnAutorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAutorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAutorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
