import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.less']
})
export class BaseTemplateComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}
