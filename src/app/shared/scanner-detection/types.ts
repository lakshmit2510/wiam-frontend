export interface ScanDetected {
    barcode: string;
}

export interface ScannerConfiguration {
    zeroCode?: number;
    nineCode?: number;
    enterCode?: number;
    minLength?: number;
    scanTimeout?: number;
}
