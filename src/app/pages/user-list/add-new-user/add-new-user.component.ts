import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersService } from '../../../services/users-service/users.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.less']
})
export class AddNewUserComponent implements OnInit {

  accountCreateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private modalService: NzModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.accountCreateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumberPrefix: ['+65'],
      phoneNumber: [null, [Validators.required]],
      companyName: [null, [Validators.required]],
      companyAddress: [null, [Validators.required]],
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.accountCreateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.accountCreateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  submitForm(): void {
    for (const i in this.accountCreateForm.controls) {
      this.accountCreateForm.controls[i].markAsDirty();
      this.accountCreateForm.controls[i].updateValueAndValidity();
    }
    if (this.accountCreateForm.valid) {
      const values = this.accountCreateForm.getRawValue();
      this.usersService.registerUser(values).subscribe((res: any) => {
        if (res.status === 'ok') {
          this.modalService.success({
            nzTitle: 'Success',
            nzContent: 'User has been successfully created.',
            nzOkText: 'Login',
            nzCancelText: 'Close',
            nzOnOk: () => {
              this.router.navigate(['/login']);
            },
          });
        } else {
          this.modalService.error({
            nzTitle: 'Error',
            nzContent: 'The email entered is already exits. please try login.',
          });
        }
      });
    }
  }
}
