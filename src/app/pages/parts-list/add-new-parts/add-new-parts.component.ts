import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { UploadFile } from "ng-zorro-antd/upload";
import { Observable, Observer } from "rxjs";
import { Router } from "@angular/router";
import { PartsService } from "../../../services/parts-service/parts.service";
import { PartModel, PartInterface } from "../../../types/part";
import { environment } from "../../../../environments/environment";


@Component({
  selector: "app-add-new-parts",
  templateUrl: "./add-new-parts.component.html",
  styleUrls: ["./add-new-parts.component.less"]
})
export class AddNewPartsComponent implements OnInit {

  model: PartInterface = {
    partName: "",
    partDescription: "",
    partNumber: "",
    quantityInHand: "",
    manufaturingDate: "",
    expiryDate: "",
    productCategory: "",
    location: "",
    partCostPrice: null,
    partSellingPrice: null,
    vendorName: "",
    Model: "",
    Manufacturer: "",
    Images: "",
  };
  loading = false;
  avatarUrl?: string;
  filePath: any = null;
  constructor(private partsService: PartsService, private msg: NzMessageService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.partsService.addNewPartDetails(PartModel.create(this.model)).subscribe(res => {
      this.router.navigate(["/parts-list"]);
    });
  }

  beforeUpload = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.msg.error("You can only upload JPG file!");
        observer.complete();
        return;
      }
      const isLt2M = 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("Image must smaller than 2MB!");
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line: no-non-null-assertion
    reader.addEventListener("load", () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case "uploading":
        this.loading = true;
        break;
      case "done":
        // Get this url from response in real world.
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        this.model.Images = info.file.response.file_path;
        break;
      case "error":
        this.msg.error("Network error");
        this.loading = false;
        break;
    }
  }

  uploadUrl() {
    return `${environment.apiUrl}/Parts/upload_file`;
  }
}
