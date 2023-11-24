import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogoutAction} from "../auth/state/action/user.action";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {UserModel} from "../auth/state/model/user.model";
import {UserState} from "../auth/state/state/user.state";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Select(UserState.getUser)
    username$: Observable<UserModel>;
    name: string;

    constructor(private router: Router,
                private store: Store
    ) {
    }

    goCard(id: number) {
        this.router.navigate(['/card', id]).then();
    }

    onLogout() {

        this.store.dispatch(new LogoutAction());
        this.router.navigate(["/"]);

    }


    ngOnInit(): void {
        this.username$.subscribe((data) => {
          this.name = data.username.charAt(0).toUpperCase() + data.username.slice(1);
          console.log(data)
      });


    }

}
