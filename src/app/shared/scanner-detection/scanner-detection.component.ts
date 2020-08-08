import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ScanDetected, ScannerConfiguration } from './types';

@Component({
    selector: 'app-scanner-detection',
    templateUrl: './scanner-detection.component.html',
    styleUrls: ['./scanner-detection.component.less'],
})
export class ScannerDetectionComponent implements OnInit, OnDestroy {
    @Input() set config(input: ScannerConfiguration) {
        this.configObj = Object.assign(this.configObj, input);
    }

    private configObj: ScannerConfiguration = {
        zeroCode: 48,
        nineCode: 57,
        enterCode: 13,
        minLength: 3,
        scanTimeout: 300, // ms
    };

    chars = [];
    startTime = undefined;
    endTime = undefined;
    enterPressedLast = false;
    setTimer = null;

    @Output() scan: EventEmitter<ScanDetected> = new EventEmitter();

    @HostListener('document:keyup', ['$event'])
    onKeyUp(ev: KeyboardEvent) {
        if (this.setTimer) {
            clearTimeout(this.setTimer);
        }
        if (this.chars.length === 0) {
            this.startTime = new Date().getTime();
        } else {
            this.endTime = new Date().getTime();
        }

        // Register characters and enter key
        if (ev.which >= this.configObj.zeroCode && ev.which <= this.configObj.nineCode) {
            this.chars.push(String.fromCharCode(ev.which));
        }

        this.enterPressedLast = ev.which === this.configObj.enterCode;

        this.setTimer = setTimeout(() => {
            if (this.chars.length >= this.configObj.minLength && this.enterPressedLast) {
                const barcode = this.chars.join('');
                this.scan.emit({ barcode });
            }
            this.chars = [];
        }, 300);
    }
    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {
        if (this.setTimer) {
            clearTimeout(this.setTimer);
        }
    }
}
