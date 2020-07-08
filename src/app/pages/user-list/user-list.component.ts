import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  listOfCustomersData: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data: any[]) => {
      this.listOfCustomersData = data;
    });
  }

}
