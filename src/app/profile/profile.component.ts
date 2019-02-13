import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScfService } from '../service/scf.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Role } from '../model/Role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fromProfile: FormGroup;
  item="User";
  status="";
  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }
  user: User[];
  chitId: number;

  ngOnInit() {
    this.chitId = Number(localStorage.getItem('chitId'));
    this.fromProfile = this.fb.group({
      firstname: [],
      lastname: [],
      gender: [],
      dateOfBirth: [],
      mobile: [],
      email: [],
      address1 :[],
      address2 :[],
      pinCode :[]



    });
  }


  saveProfile() {

    let role = new Role;
    role.id = 2;

    let user: User = this.fromProfile.value;
    user.role = role;
    user.password = '1234';
    user.chitId = this.chitId;
    this.scfService.saveUser(user).subscribe(data => {
      let user: User = data;
      console.log(this.chitId + "chit id ............")
      status="success";
    },
    err=>{
      console.log("Error");
      status="fail";
    });
  }
}
