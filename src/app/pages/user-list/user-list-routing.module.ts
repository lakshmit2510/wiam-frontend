import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add-new-user', component: AddNewUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
