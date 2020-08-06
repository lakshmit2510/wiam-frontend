export interface PartInterface {
  partName?: string;
  partDescription?: string;
  partNumber?: string;
  quantityInHand?: string;
  units?: string;
  manufaturingDate?: string;
  expiryDate?: string;
  productCategory?: string;
  location?: string;
  partCostPrice?: number;
  partSellingPrice?: number;
  vendorName?: string;
  Manufacturer?: string;
  Model?: string;
  Images?: string;
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
      units: res.Units,
      manufaturingDate: res.ManufacturingDate,
      expiryDate: res.ExpiryDate,
      productCategory: res.Category,
      location: res.SKUNo,
      partCostPrice: res.CostPrice,
      partSellingPrice: res.SellingPrice,
      vendorName: res.VendorName,
      Model: res.Model,
      Manufacturer: res.Manufacturer,
      Images: res.Images
    };
  }

  static mapFormValues(res) {
    return {
      vehicleNo: res.VehicleNo,
      vehicleModel: res.Model,
      serviceType: res.ServiceType,
      technicianName: res.TechnicianName,
      brand: res.Brand,
      partsList: '',
      description: '',
      qtyRequested: '',

    };
  }
  // static mapFormPartsListValues(res) {
  //   return {
  //     partsList: res.ItemNumber,
  //     description: res.Description,
  //     unitPrice: res.SellingPrice,
  //   };
  // }

}
