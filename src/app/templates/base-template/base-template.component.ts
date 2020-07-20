import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.less']
})
export class BaseTemplateComponent implements OnInit {
  // routesConfig = [{
  //   key: "parts_requests",
  //   name: "Parts Requests",
  //   type: "category",
  //   iconName: "unordered-list",
  //   childre: [{
  //     key: "parts_request_list",
  //     name: "Parts Request List",
  //     type: "link",
  //     url: "/work-order-list",
  //     role: ["Admin", "Company"]
  //   }]
  // }, {
  //   key: "products_list",
  //   name: "Products List",
  //   type: "category",
  //   iconName: "snippets",
  //   childre: [
  //     {
  //       key: "total_products_list",
  //       name: "Total Products List",
  //       type: "link",
  //       url: "/parts-list",
  //       role: ["Admin"]
  //     },
  //     {
  //       key: "category_a",
  //       name: "CategoryA (High Value)",
  //       type: "link",
  //       url: "/parts-list/category-a",
  //       role: ["Admin"]
  //     },
  //     {
  //       key: "category_b",
  //       name: "CategoryB (High Runner)",
  //       type: "link",
  //       url: "/parts-list/category-b",
  //       role: ["Admin"]
  //     },
  //     {
  //       key: "category_c",
  //       name: "CategoryC (Rare Stock)",
  //       type: "link",
  //       url: "/parts-list/category-c",
  //       role: ["Admin"]
  //     },
  //     {
  //       key: "category_d",
  //       name: "CategoryD (Normal Stock)",
  //       type: "link",
  //       url: "/parts-list/category-d",
  //       role: ["Admin"]
  //     }]
  // }, {
  //   key: "purchase_order",
  //   name: "Purchase Order",
  //   type: "category",
  //   iconName: "shopping-cart",
  //   children: [{
  //     key: "purchase_order",
  //     name: "Purchase Order",
  //     type: "link",
  //     url: "/purchase-order",
  //     role: ["Admin"]
  //   }]
  // }, {
  //   key: "suppliers_list",
  //   name: "Suppliers List",
  //   type: "link",
  //   url: "/suppliers-list",
  //   role: ["Admin"]
  // },
  // {
  //   key: "costomers_list",
  //   name: "Costomers List",
  //   type: "link",
  //   url: "/user-list",
  //   role: ["Admin"]
  // }];


  isCollapsed = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  handleLogout(): void {
    this.authenticationService.deleteToken();
    this.router.navigate(['/login']);
  }

  isRouteEnabled(roles): boolean {
    const userInfo = this.authenticationService.getUserInfo();
    if (roles.includes(userInfo.role)) {
      return true;
    }
    return false;
  }

}
