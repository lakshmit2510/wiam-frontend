import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PartsService } from '../../../services/parts-service/parts.service';
@Component({
  selector: 'app-view-parts',
  templateUrl: './view-parts.component.html',
  styleUrls: ['./view-parts.component.less']
})
export class ViewPartsComponent implements OnInit {

  @Input() isVisible = false;
  @Input() partID = null;

  @Output() visibleChange = new EventEmitter();

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
    this.visibleChange.emit(false);
  }

}
