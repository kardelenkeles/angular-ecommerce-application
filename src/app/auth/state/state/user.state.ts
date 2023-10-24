import {Action, Selector, State, StateContext} from "@ngxs/store";
import {UserStateModel} from "../model/userState.model";
import {Injectable} from "@angular/core";
import {LoginAction, LogoutAction, RegisterAction} from "../action/user.action";
import {tap} from "rxjs";
import {AuthService} from "../../auth.service";

@State<UserStateModel>
({
  name: 'user',
  defaults: {
    id: '',
    email: '',
    username: '',
    password: '',
    token: '',
  }
})

@Injectable()
export class UserState {

  constructor(private authService: AuthService) {
  }

  @Selector()
  static getUser(state: UserStateModel) {
    return state;
  }


  @Action(RegisterAction)
  register({patchState}: StateContext<UserStateModel>, {username, email, password}: RegisterAction) {
    return this.authService.register({username, email, password}).pipe(
      tap((user) => {
        patchState({
          username: user.username,
          email: user.email,
          password: user.password
        });
      })
    );
  }

  @Action(LoginAction)
  login({patchState}: StateContext<UserStateModel>, {username, password}: LoginAction) {
    return this.authService.login({username, password}).pipe(
      tap((user) => {
        patchState({
          username: user.username,
          password: user.password
        });
      })
    );
  }

  @Action(LogoutAction)
  logout({patchState}: StateContext<UserStateModel>) {
    patchState({
      username: '',
      password: ''
    });
  }

}
