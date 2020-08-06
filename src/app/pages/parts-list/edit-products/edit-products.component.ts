import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartsService } from '../../../services/parts-service/parts.service';
import { PartModel, PartInterface } from '../../../types/part';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.less']
})
export class EditProductsComponent implements OnInit {

  model: PartInterface = {
    partName: '',
    partDescription: '',
    partNumber: null,
    quantityInHand: null,
    manufaturingDate: '',
    expiryDate: '',
    productCategory: '',
    location: '',
    partCostPrice: null,
    partSellingPrice: null,
    vendorName: '',
    Manufacturer: '',
    Model: '',
    Images: '',
  };
  loading = false;
  avatarUrl?: string;
  filePath: any = null;
  constructor(
    private partsService: PartsService,
    private msg: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modal: NzModalService) { }

  ngOnInit() {
    this.getPartsById();
  }

  getPartsById(): void {
    const { partsID } = this.activatedRoute.snapshot.queryParams;

    this.partsService.getPartsById(partsID).subscribe(res => {
      this.model = PartModel.mapValues(res[0]);
    });
  }
  submitForm() {
    const { partsID } = this.activatedRoute.snapshot.queryParams;
    this.partsService.updatePartDetails(partsID, PartModel.create(this.model)).subscribe(res => {
      this.router.navigate(['/parts-list']);
    });
  }
  beforeUpload = (file: UploadFile, fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
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
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        this.model.Images = info.file.response.file_path;
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  uploadUrl() {
    return `${environment.apiUrl}/Parts/upload_file`;
  }

  deletePart(): void {
    const { partsID } = this.activatedRoute.snapshot.queryParams;
    this.modal.confirm({
      nzTitle: 'Are you sure to delete this Part?',
      // nzContent: '<b style='color: red;'>Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.partsService.deletePartbyId(partsID).subscribe((res) => {
          this.router.navigate(['/parts-list']);
        });
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
