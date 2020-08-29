import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getTotalPartsList(options) {
    const params = options.type ? `type=${options.type}` : '';
    return this.httpClient.get(
      `${environment.apiUrl}/Dashboard/getTotalParts?${params}`);
  }
}

export class Data {
  day: string;
  oranges: number;
}

const data: Data[] = [{
  day: 'Jan',
  oranges: 3
}, {
  day: 'Feb',
  oranges: 2
}, {
  day: 'Mar',
  oranges: 3
}, {
  day: 'Apr',
  oranges: 4
}, {
  day: 'May',
  oranges: 6
}, {
  day: 'June',
  oranges: 11
}, {
  day: 'July',
  oranges: 4
}, {
  day: 'Aug',
  oranges: 6
}, {
  day: 'Sep',
  oranges: 8
}, {
  day: 'Oct',
  oranges: 2
}, {
  day: 'Nov',
  oranges: 12
}, {
  day: 'Dec',
  oranges: 18
}];

@Injectable()

export class Service {
  getData(): Data[] {
    return data;
  }
}

export class PopulationByRegion {
  region: string;
  val: number;
}

const populationByRegions: PopulationByRegion[] = [{
  region: 'Cancelled',
  val: 1119626292
}, {
  region: 'Due Vehicles Count',
  val: 2012956064
}, {
  region: 'Service Completed',
  val: 1441245205
}];

@Injectable()
export class Services {
  getPopulationByRegions(): PopulationByRegion[] {
    return populationByRegions;
  }
}
