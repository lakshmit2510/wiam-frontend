export interface PartInterface {
  partName?: string;
  partDescription?: string;
  partNumber?: number;
  quantityInHand?: number;
  manufaturingDate?: string;
  expiryDate?: string;
  productCategory?: string;
  location?: string;
  partCostPrice?: number;
  partSellingPrice?: number;
  vendorName?: string;
}

export class PartModel {

  static create(event: PartInterface) {
    return { ...event };
  }

}
