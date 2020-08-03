import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PartsService } from '../parts-service/parts.service';
import { convertJsonToQueryParams } from '../../utils/query-param.util';

@Injectable({
    providedIn: 'root',
})
export class WorkOrderService {
    constructor(private httpClient: HttpClient, private partsService: PartsService) {}

    public getAllRequestedList() {
        return this.httpClient.get(`${environment.apiUrl}/Product_Request_List/getAllRequests`);
    }
    public getWorkOrderListById(requestId) {
        return this.httpClient.get(
            `${environment.apiUrl}/Product_Request_List/getRequestListById?requestId=${requestId}`,
        );
    }
    public getAllmodelsList() {
        return this.httpClient.get(`${environment.apiUrl}/Product_Request_List/getAllVehicleModels`);
    }

    public getRequestListByDateAndVNo(options) {
        return this.httpClient.get(
            `${environment.apiUrl}/Product_Request_List/getRequestListByDate?${convertJsonToQueryParams(options)}`,
        );
    }

    public getAllVNos() {
        return this.httpClient.get(`${environment.apiUrl}/Product_Request_List/getVehicleNoList`);
    }

    // This will get workorder and parts details and will merge as one response
    public getWorOrderAndParts(requestId) {
        let orderDetails: any = {};
        const partsRequested = {};

        return of({})
            .pipe(
                switchMap(() => this.getWorkOrderListById(requestId)),
                tap((data) => {
                    orderDetails = data[0];
                    const partIds = orderDetails.PartsList.split(',');
                    const partQty = orderDetails.QTYRequested.split(',');
                    partIds.forEach((item, idx) => {
                        partsRequested[item] = partQty[idx];
                    });
                }),
            )
            .pipe(
                switchMap(() => this.partsService.getPartsByCommaId(orderDetails.PartsList)),
                map((data) => ({ orderDetails, partsRequested, partsList: data })),
            );
    }
    deleteRequestForm(id) {
        return this.httpClient.put(`${environment.apiUrl}/Product_Request_List/cancelRequestById/${id}`, {});
    }
    updateRequestForm(id) {
        return this.httpClient.put(`${environment.apiUrl}/Product_Request_List/updateRequestFormById/${id}`, {});
    }
}
