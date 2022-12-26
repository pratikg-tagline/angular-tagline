import { Component, Input, OnInit } from '@angular/core';

interface Services{
  footerservices: string;
  footermobile: string;
  footerdevelopment: string;
  footerdesign: string;
  footerui: string;
  footerdigitalmarketing: string;
}
@Component({
  selector: 'app-footservices',
  templateUrl: './footservices.component.html',
  styleUrls: ['./footservices.component.scss']
})
export class FootservicesComponent implements OnInit {
@Input() footerservices:Services[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
