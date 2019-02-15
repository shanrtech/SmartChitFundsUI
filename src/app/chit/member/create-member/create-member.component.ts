import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScfService } from 'src/app/service/scf.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { Role } from 'src/app/model/Role';
import { ChitMember } from 'src/app/model/ChitMember';
import { Chit } from 'src/app/model/Chit';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {


  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }


  memberDetailsForm: FormGroup;
  user: User[];
  chitId: number;

  ngOnInit() {
    this.chitId = Number(localStorage.getItem('chitId'));
    this.memberDetailsForm = this.fb.group({
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



  saveUserDetails() {
    let role = new Role;
    role.id = 2;

    let user: User = this.memberDetailsForm.value;
    user.role = role;
    user.password = '1234';
    user.chitId=this.chitId;
    this.scfService.saveUser(user).subscribe(data => {
      let user: User = data;
      console.log(this.chitId + "chit id ............")
    });

    



  }




}
