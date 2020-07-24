import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(selectorId: string) {

    const printContents = document.getElementById(selectorId).innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    // this.isPrinting = true;
    // this.router.navigate(['/',
    //   {
    //     outlets: {
    //       print: ['print', documentName, documentData.join()]
    //     }
    //   }]);
  }

}
