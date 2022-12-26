import { Component, Input, OnInit } from '@angular/core';

interface Developer{
  footerhiredevelopers: string;
  footerpython: string;
  footerangular: string;
  footerror: string;
  footerflutter: string;
  footerreact: string;
  footerreactnative: string;
}
@Component({
  selector: 'app-foothiredevlopers',
  templateUrl: './foothiredevlopers.component.html',
  styleUrls: ['./foothiredevlopers.component.scss']
})
export class FoothiredevlopersComponent implements OnInit {
@Input() footerdevloper:Developer[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
