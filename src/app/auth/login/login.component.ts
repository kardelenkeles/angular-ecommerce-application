import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginAction, LogoutAction} from "../state/action/user.action";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private store: Store,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.store.dispatch(new LoginAction(this.loginForm.value.username, this.loginForm.value.password));
    this.loginForm.reset();
    this.router.navigate(['/home']);
  }


}
