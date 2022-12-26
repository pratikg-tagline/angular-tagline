import { Component, Input, OnInit } from '@angular/core';

interface Lastline{
  footerfollow: string;
  footer2022: string;
  footerreserved: string;
  footercompanyname: string;
}
@Component({
  selector: 'app-footlastline',
  templateUrl: './footlastline.component.html',
  styleUrls: ['./footlastline.component.scss']
})
export class FootlastlineComponent implements OnInit {
@Input() footerlastline: Lastline[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
