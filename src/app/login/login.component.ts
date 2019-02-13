import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from '../model/Role';
import { User } from '../model/User';
import { ScfService } from '../service/scf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ScfService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    });

    this.registrationForm = this.fb.group({
      email: [],
      password: []
    });
  }

  login() {
    console.log(JSON.stringify(this.loginForm.value));
    this.scfService.login(this.loginForm.value).subscribe(data => {
      console.log(data.id)
      localStorage.setItem('role-id', String(data.role.id));
      localStorage.setItem('user-id', String(data.id));
      this.router.navigate(['layout']);

 

    });


  }

  register() {
    console.log(JSON.stringify(this.registrationForm.value));
    let role = new Role;
    role.id = 1;
    let user: User = this.registrationForm.value;
    user.role = role;
    this.scfService.register(user).subscribe(data => {
      console.log(data)
    });
  }

}
