import { Component, Input, OnInit } from '@angular/core';
import { Whytegline } from '../common';


@Component({
  selector: 'app-why-tegline',
  templateUrl: './why-tegline.component.html',
  styleUrls: ['./why-tegline.component.scss']
})
export class WhyTeglineComponent implements OnInit {
@Input() infotech:Whytegline[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
