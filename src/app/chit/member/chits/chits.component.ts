import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chits',
  templateUrl: './chits.component.html',
  styleUrls: ['./chits.component.scss']
})
export class ChitsComponent implements OnInit {
  chits;
  constructor() { }

  ngOnInit() {
    
    this.chits = [
      {
        "id": 1,
        "name": "Chit 1",
        "startDate": new Date,
        "period": "Monthly",
        "amount": 2000,
        "manager": "Reddy"
      },
      {
        "id": 2,
        "name": "Chit 2",
        "startDate": new Date,
        "period": "Weekly",
        "amount": 10000,
        "manager": "Reddy"
      },
      {
        "id": 3,
        "name": "Chit 2",
        "startDate": new Date,
        "period": "Weekly",
        "amount": 10000,
        "manager": "Reddy"
      },
      {
        "id": 4,
        "name": "Chit 2",
        "startDate": new Date,
        "period": "Weekly",
        "amount": 10000,
        "manager": "Reddy"
      },
      {
        "id": 5,
        "name": "Chit 2",
        "startDate": new Date,
        "period": "Weekly",
        "amount": 10000,
        "manager": "Reddy"
      },
      {
        "id": 6,
        "name": "Chit 2",
        "startDate": new Date,
        "period": "Weekly",
        "amount": 10000,
        "manager": "Reddy"
      }
    ];
  }

}
