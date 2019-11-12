import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPartsComponent } from './add-new-parts.component';

describe('AddNewPartsComponent', () => {
  let component: AddNewPartsComponent;
  let fixture: ComponentFixture<AddNewPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
