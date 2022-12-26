import { Component, Input, OnInit } from '@angular/core';
import { OurServices } from '../common';




@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
@Input() inputData:OurServices[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
