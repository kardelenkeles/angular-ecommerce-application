import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {RegisterAction} from "../state/action/user.action";
import {first} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    })
  }

  onSubmitRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    this.store.dispatch(
      new RegisterAction(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.email));
  }


}
