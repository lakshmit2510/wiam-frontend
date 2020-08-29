import { Component, OnInit, Input } from '@angular/core';
import { DashboardService, } from '../../services/dashboard-service/dashboard.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.less']
})
export class DashboardCardComponent implements OnInit {

  @Input() data: any;
  @Input() config: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.data = {};
    this.dashboardService.getTotalPartsList({ type: this.config.type }).subscribe((data: any[]) => {
      this.data = data[0];
    });
  }

}
