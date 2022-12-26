import { Component, Input, OnInit } from '@angular/core';

interface Navbar {
    caseStudy: string;
    aboutus: string;
    hiredevloper: string;
    technology: string;
    industry: string;
    // mainlogo: string;
    // button: string;
  }
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
