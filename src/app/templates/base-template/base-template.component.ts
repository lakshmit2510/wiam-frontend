import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.less']
})
export class BaseTemplateComponent implements OnInit {
  isCollapsed = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  handleLogout(): void {
    this.authenticationService.deleteToken();
    this.router.navigate(['/login']);
  }

}
