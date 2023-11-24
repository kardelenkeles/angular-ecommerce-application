import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {UserState} from "../state/state/user.state";


@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private store: Store
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.store.selectSnapshot(UserState.getToken);

    if (token) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
