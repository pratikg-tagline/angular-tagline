import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../allServices/navbar.service';
import { Navbar } from '../common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 header:string[] | undefined;
btn:string="button"
getquote:string="GetGuote"
teglinelogo:string="../assets/../assets/images/tagline.png"

  constructor(private navbarService:NavbarService) { }

  ngOnInit(): void {
    this.header=this.navbarService.lable
  }

}
