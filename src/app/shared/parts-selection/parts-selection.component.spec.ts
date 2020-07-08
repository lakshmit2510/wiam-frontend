import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsSelectionComponent } from './parts-selection.component';

describe('PartsSelectionComponent', () => {
  let component: PartsSelectionComponent;
  let fixture: ComponentFixture<PartsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
