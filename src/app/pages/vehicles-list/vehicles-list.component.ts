import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list-service/vehicle-list.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.less']
})
export class VehiclesListComponent implements OnInit {

  vehiclesList: any[];
  constructor(private vehicleListService: VehicleListService) { }

  ngOnInit() {
    this.getVehiclesList();
  }

  getVehiclesList() {
    this.vehicleListService.getAllVehicleDetails().subscribe((data: any[]) => {
      this.vehiclesList = data;
    });
  }

}
