import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-request-confirm',
    templateUrl: './request-confirm.component.html',
    styleUrls: ['./request-confirm.component.less'],
})
export class RequestConfirmComponent implements OnInit {
    viewRequestId = null;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const { workOrderId } = this.activatedRoute.snapshot.queryParams;
        if (!workOrderId) {
            return false;
        }
        this.viewRequestId = workOrderId;
    }

    handleNextResults() {
        this.router.navigate(['/work-order-list']);
    }
}
