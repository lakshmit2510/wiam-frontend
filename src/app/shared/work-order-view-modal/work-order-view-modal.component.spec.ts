import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderViewModalComponent } from './work-order-view-modal.component';

describe('WorkOrderViewModalComponent', () => {
  let component: WorkOrderViewModalComponent;
  let fixture: ComponentFixture<WorkOrderViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
