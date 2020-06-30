import { TestBed } from '@angular/core/testing';

import { BarcodeDecoderService } from './barcode-decoder.service';

describe('BarcodeDecoderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodeDecoderService = TestBed.get(BarcodeDecoderService);
    expect(service).toBeTruthy();
  });
});
