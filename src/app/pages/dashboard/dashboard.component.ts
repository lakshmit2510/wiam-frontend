import { Component, OnInit } from '@angular/core';
import { DashboardService, Data, Service, PopulationByRegion, Services } from '../../services/dashboard-service/dashboard.service';
import { getConfig } from './config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [Service, Services]
})
export class DashboardComponent implements OnInit {

  config: any;
  totalPartsList: any = {};
  dataSource: Data[];
  populationByRegions: PopulationByRegion[];
  constructor(
    private dashboardService: DashboardService,
    private service: Service,
    private services: Services,
  ) { }

  ngOnInit() {
    this.config = getConfig();
    this.populationByRegions = this.services.getPopulationByRegions();
    this.dataSource = this.service.getData();
    // this.dashboardService.getTotalPartsList().subscribe((data: any[]) => {
    //   this.totalPartsList = data[0];
    // });
  }


}
