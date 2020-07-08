import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

@NgModule({
  declarations: [UserListComponent, AddNewUserComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    NzTableModule,
    NzPageHeaderModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class UserListModule { }
