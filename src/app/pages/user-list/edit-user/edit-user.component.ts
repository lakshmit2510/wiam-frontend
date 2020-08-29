import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UsersService } from '../../../services/users-service/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;

  model = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Role: '',
    CompanyName: '',
    CompanyAddress: '',
  };

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private modalService: NzModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserDataById();
    this.editForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+65'],
      phoneNumber: [null, [Validators.required]],
      companyName: [null, [Validators.required]],
      companyAddress: [null, [Validators.required]],
      role: [null, [Validators.required]],
    });
  }

  getUserDataById(): void {
    const { userID } = this.activatedRoute.snapshot.queryParams;

    this.usersService.getUserDetailsById(userID).subscribe(res => {
      this.model = res[0];
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.editForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.editForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.editForm.controls) {
      this.editForm.controls[i].markAsDirty();
      this.editForm.controls[i].updateValueAndValidity();
    }
    if (this.editForm.valid) {
      const values = this.editForm.getRawValue();
      const { userID } = this.activatedRoute.snapshot.queryParams;
      this.usersService.updateUserDetailsById(userID, values).subscribe((res: any) => {
        if (res.status === 'ok') {
          this.modalService.success({
            nzTitle: 'Success',
            nzContent: 'User details has been successfully Updated.',
            nzOkText: 'Ok',
            // nzCancelText: 'Close',
            nzOnOk: () => {
              this.router.navigate(['/user-list']);
            },
          });
        } else {
          this.modalService.error({
            nzTitle: 'Error',
            nzContent: 'The email entered is already exsits. please try login (or) use another Email.',
          });
        }
      });
    }
  }
}
