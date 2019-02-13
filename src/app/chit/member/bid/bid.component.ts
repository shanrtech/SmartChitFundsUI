import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScfService } from 'src/app/service/scf.service';
import { Router } from '@angular/router';
import { BidDetails } from 'src/app/model/BidDetails';


@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {
 
  bidDeatils: FormGroup;

  bids;
  constructor(private fb: FormBuilder, private scfService: ScfService, private router: Router) { }


  ngOnInit() {

    this.bidDeatils = this.fb.group({
      bid_amount : [],
      remain_amount :[],

    });

    
  }

  bidDetails(){
   

    let bidDetails : BidDetails = this.bidDeatils.value;
    console.log(this.bidDeatils.value)
    console.log(bidDetails)
    this.scfService.SaveBidDeatils(bidDetails).subscribe(data =>
      {
        console.log(data)
      }
      );
  }


}
