import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes-service/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.less']
})
export class QuotesComponent implements OnInit {

  quotesList: any[];
  dataTable: any;
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotesService.getAllQuotes().subscribe((data: any[]) => {
      this.quotesList = data;
      const table: any = $('#Quotes-table');
      this.dataTable = table.DataTable();
    });
  }

}
