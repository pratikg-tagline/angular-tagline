import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../allServices/all-inter-face';
import { AllservicesService } from '../allServices/allservices.service';
import { OurServices } from '../common';




@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
@Input() inputData:OurServices[]=[];

servicesData:Users[]=[];

  constructor(private  allservicesService : AllservicesService ) { }

  ngOnInit(): void {
    this.servicesData=this.allservicesService.users
  }

}
