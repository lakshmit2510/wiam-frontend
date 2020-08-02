import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { getConfig } from './config';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.less'],
})
export class PrintComponent implements OnInit {
    @ViewChild('printHost', { static: true, read: ViewContainerRef }) printHost: ViewContainerRef;
    printCompType = null;
    requestId = null;
    componentRef: any;

    config: any = {};

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.handlePrintComp();
    }

    handlePrintComp() {
        const { type, requestId } = this.activatedRoute.snapshot.queryParams;
        if (!type) return false;
        const config = getConfig();
        this.printCompType = type;
        switch (type) {
            case 'work-order': {
                this.requestId = requestId;
                this.config = config['work-order'];
                this.loadComponent();
                this.componentRef.instance.requestId = requestId;
                break;
            }
            default:
                break;
        }
        this.handlePrint();
    }

    loadComponent() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config.renderComponent);
        this.printHost.clear();

        this.componentRef = this.printHost.createComponent(componentFactory);
    }

    handlePrint() {
        setTimeout(() => {
            window.print();
        }, 1000);
    }
}
