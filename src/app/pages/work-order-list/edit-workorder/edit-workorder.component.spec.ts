import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkorderComponent } from './edit-workorder.component';

describe('EditWorkorderComponent', () => {
  let component: EditWorkorderComponent;
  let fixture: ComponentFixture<EditWorkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
