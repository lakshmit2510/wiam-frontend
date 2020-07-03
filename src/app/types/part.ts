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
  Manufacturer?: string;
  Model?: string;
}

export class PartModel {

  static create(event: PartInterface) {
    return { ...event };
  }

  static mapValues(res) {
    return {
      partName: res.PartsName,
      partDescription: res.Description,
      partNumber: res.ItemNumber,
      quantityInHand: res.QTYInHand,
      manufaturingDate: res.ManufacturingDate,
      expiryDate: res.ExpiryDate,
      productCategory: res.Category,
      location: res.SKUNo,
      partCostPrice: res.CostPrice,
      partSellingPrice: res.SellingPrice,
      vendorName: res.VendorName,
      Model: res.Model,
      Manufacturer: res.Manufacturer
    };
  }

}
