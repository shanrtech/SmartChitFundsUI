import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/model/Period';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScfService } from 'src/app/service/scf.service';
import { Router } from '@angular/router';
import { Chit } from 'src/app/model/Chit';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-create-chit',
  templateUrl: './create-chit.component.html',
  styleUrls: ['./create-chit.component.scss']
})
export class CreateChitComponent implements OnInit {




  chitForm: FormGroup;
  periods: Period[];

  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }

  ngOnInit() {

    this.chitForm = this.fb.group({
      name: [],
      startDate: [],
      amount: [],
      period: [],
      commissionRupess :[],
      manager :[],
      commission :[]

    });

    this.scfService.getPeriods().subscribe(data => {
      this.periods = data;
      console.log(JSON.stringify(this.periods))


    });


  }

  createChit() {

    // console.log(JSON.stringify(this.chitForm.value));
    let period = new Period;
    period.id = 3;
    let user = new User;
    user.id = Number(localStorage.getItem("user-id"));
    let chit: Chit = this.chitForm.value;
    chit.period = period;
    chit.user = user;
    this.scfService.chit(chit).subscribe(data => {
      

    });

  }

}
export class NgIfComponent {
  show = false;
}