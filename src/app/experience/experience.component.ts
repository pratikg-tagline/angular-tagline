import { Component, Input, OnInit } from '@angular/core';
// import { Exper } from '../allServices/all-inter-face';
//import { AllservicesService } from '../allServices/allservices.service';
import { Exper } from '../allServices/exper';
import { ExperService } from '../allServices/exper.service';
import { Experience } from '../common';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  project: Experience[]=[];


experData:Exper[]=[];

  constructor(private  experService : ExperService) { }

  ngOnInit(): void {
     this.project=this.experService.exper;
  }

}
