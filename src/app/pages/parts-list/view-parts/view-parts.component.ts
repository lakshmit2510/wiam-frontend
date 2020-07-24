import { Component, OnInit, Input } from '@angular/core';
import { PartsService } from '../../../services/parts-service/parts.service';
@Component({
  selector: 'app-view-parts',
  templateUrl: './view-parts.component.html',
  styleUrls: ['./view-parts.component.less']
})
export class ViewPartsComponent implements OnInit {

  @Input() isVisible = false;
  @Input() partID = null;
  partData: any = {};
  gridStyle = {
    width: '250px',
    textAlign: 'center'
  };

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getPartsById(this.partID).subscribe((data: any[]) => {
      this.partData = data[0];
    });
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
