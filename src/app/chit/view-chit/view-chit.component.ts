import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScfService } from 'src/app/service/scf.service';
import { Router } from '@angular/router';
import { Chit } from 'src/app/model/Chit';


@Component({
  selector: 'app-view-chit',
  templateUrl: './view-chit.component.html',
  styleUrls: ['./view-chit.component.scss']
})
export class ViewChitComponent implements OnInit {

  chits: Chit[];


  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }

  ngOnInit() {

    let userId = localStorage.getItem("user-id");

    console.log("userid:" + userId);
    this.scfService.getChitData(userId).subscribe(data => {
      this.chits = data;
      console.log(JSON.stringify(this.chits));
    });
  }


  delete(id){
    console.log(id +"delete id")

    this.scfService.deleteChitData(id).subscribe(data =>{
   console.log(data)
    });
  }

}
