import { Component, OnInit } from '@angular/core';
import { Member } from '../Member';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {

  members: Member[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let chitId = params['chitId'];
      console.log("batch id:" + chitId);
      localStorage.setItem('chitId', String(chitId));
    });

    this.members = [
      {
        "id": 1,
        "firstname":"SHANMUGAM REDDY",
        "lastname":"T",
        "email":"shanrt@gmail.com",        
      },
      {
        "id": 2,
        "firstname":"VENKATESH",
        "lastname":"S",
        "email":"venki@gmail.com"
      }
    ];
  }


  edit(id){
    console.log(id+"   id.................")
   }

}
