import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users-service/users.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  listOfCustomersData: any[];
  constructor(private usersService: UsersService, private modal: NzModalService, private router: Router) { }

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.usersService.getAllUsers().subscribe((data: any[]) => {
      this.listOfCustomersData = data;
    });
  }

  deleteUser(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to delete user details?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () =>
        this.usersService.deleteUserbyId(id).subscribe((res) => {
          this.usersList();
        }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  editUser(UserID): void {
    this.router.navigate(['/user-list/edit-user'], {
      queryParams: { userID: UserID },
    });
  }

}
