import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workorder',
  templateUrl: './create-workorder.component.html',
  styleUrls: ['./create-workorder.component.less']
})
export class CreateWorkorderComponent implements OnInit {
  workOrderStatusList = [
    { title: 'Open', value: 'open' },
    { title: 'Work In Progress', value: 'inprogress' },
    { title: 'Closed, Completed', value: 'completed' },
    { title: 'Closed, In Completed', value: 'incompleted' }
  ];
  priorityList = [
    { title: 'High', value: 'high' },
    { title: 'Medium', value: 'medium' },
    { title: 'Low', value: 'low' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
