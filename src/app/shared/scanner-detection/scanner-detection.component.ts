import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ScanDetected, ScannerConfiguration } from './types';
import { Barcoder } from './barcodeValidator';

@Component({
  selector: 'app-scanner-detection',
  templateUrl: './scanner-detection.component.html',
  styleUrls: ['./scanner-detection.component.less']
})
export class ScannerDetectionComponent implements OnInit {

  @Input() set config(input: ScannerConfiguration) {
    this.configObj = Object.assign(this.configObj, input);
  }

  private configObj: ScannerConfiguration = {
    minLength: 7,
    maxLength: 14,
    scannerStartsWith: '',
    scannerEndsWith: '',
    scanTimeout: 100,
    allowNotNumber: true,
    replaceNotNumber: true,
    ignoreOverElement: ['INPUT'],
    barcodeType: 'ean13'
  };

  private checkRegex: RegExp = new RegExp(`^${this.configObj.scannerStartsWith}${this.configObj.allowNotNumber ? '.' : '\\d'}
  {${this.configObj.minLength},${this.configObj.maxLength}}${this.configObj.scannerEndsWith}$`);

  private inputStr = '';

  @Output() scan: EventEmitter<ScanDetected> = new EventEmitter();

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    const target: any = ev.target;
    if (this.configObj.ignoreOverElement.includes(target.tagName)) {
      return;
    }
    this.inputStr += ev.key;
    setTimeout(() => {
      // if (this.checkRegex.test(this.inputStr)) {
        const replace: RegExp =
          this.configObj.replaceNotNumber ?
            new RegExp(`\\D${this.configObj.scannerStartsWith.length ? '\|' + this.configObj.scannerStartsWith : ''}
            ${this.configObj.scannerEndsWith.length ? '\|' + this.configObj.scannerEndsWith : ''}`, 'g') :
            new RegExp(`${this.configObj.scannerStartsWith}${this.configObj.scannerEndsWith.length ? '\|' +
              this.configObj.scannerEndsWith : ''}`, 'g');

        const barcode = this.inputStr.replace(replace, '');
        const length = barcode.length;
        const valid = (new Barcoder(this.configObj.barcodeType).validate(barcode) as boolean);
        this.scan.emit({ barcode, length, valid });
      // }
      // this.inputStr = '';
    }, this.configObj.scanTimeout);
  }
  constructor() { }

  ngOnInit() {
  }

}
