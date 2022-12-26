import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() header:any;
btn:string="button"
getquote:string="GetGuote"
teglinelogo:string="../assets/../assets/images/tagline.png"

  constructor() { }

  ngOnInit(): void {
  }

}
