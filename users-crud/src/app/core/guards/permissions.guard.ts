import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const GUARDS = {
  ADMIN: 'admin',
  USER: 'user',
};

@Injectable({ providedIn: 'root' })
export class PermissionsGuard implements CanActivate {
  perm = localStorage.getItem('perm');
  constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.activateGuard(route);
  }

  private activateGuard(route: ActivatedRouteSnapshot): boolean {
    if (route.data['guards'].include(this.perm)) return true;
    this.router.navigate(['home']);
    return false;
  }
}
