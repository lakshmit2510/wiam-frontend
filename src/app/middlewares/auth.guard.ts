import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from "@angular/router";
import { AuthenticationService } from "../services/authentication-service/authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const routeurl: string = state.url;
    return this.isLogin(routeurl, route);
  }

  isLogin(routeurl: string, route) {
    // const userInfo = this.authService.getUserInfo();
    // if (
    //   route.data.roles &&
    //   userInfo &&
    //   route.data.roles.indexOf(userInfo.role) === -1
    // ) {
    //   // role not authorised so redirect to home page
    //   this.router.navigate(["/403"]);
    //   return false;
    // }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.redirectUrl = routeurl;
    this.router.navigate(["/login"], { queryParams: { returnUrl: routeurl } });
  }
}
