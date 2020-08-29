import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  model = {
    email: '',
  };
  constructor(private modalService: NzModalService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.authenticationService.forgotPassword(this.model).subscribe((res: any) => {
      if (res.status === 'ok') {
        this.modalService.success({
          nzTitle: 'Success',
          nzContent: 'Login details sent to your registered email address. ',
          nzOkText: 'Ok',
          // nzCancelText: 'Close',
          nzOnOk: () => {
            this.router.navigate(['/login']);
          },
        });
      } else {
        this.modalService.error({
          nzTitle: 'Error',
          nzContent: 'Entered email address not exists in our system.',
        });
      }
    });
  }

}
