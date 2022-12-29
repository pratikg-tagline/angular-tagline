import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../allServices/all-inter-face';
import { AllservicesService } from '../allServices/allservices.service';
import { BackendService } from '../allServices/backend.service';
import { lang } from '../common';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
 
  backend!: lang[];
 
  

  constructor(private  backendService : BackendService ) { }

  ngOnInit(): void {
    this.backend=this.backendService.language
  }


}
