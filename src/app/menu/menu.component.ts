import { Component, OnInit } from '@angular/core';
import { ScfService } from '../service/scf.service';
import { Menu } from '../model/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private scfService: ScfService) { }
  items;
  ngOnInit() {

    let roleId = Number(localStorage.getItem('role-id'));
    this.scfService.getMenu(roleId).subscribe(data => {
      console.log(JSON.stringify(data))
      this.items = data;
    });
  }

}
