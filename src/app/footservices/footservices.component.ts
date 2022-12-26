import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../common';


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
