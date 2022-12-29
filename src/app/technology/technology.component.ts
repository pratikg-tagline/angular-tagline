import { Component, Input, OnInit } from '@angular/core';
import { AllservicesService } from '../allServices/allservices.service';
import { TechnologyService } from '../allServices/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
 ourtechnology:string[]=[];


constructor(private  technologyService : TechnologyService ) { }

ngOnInit(): void {
 this.ourtechnology=this.technologyService.technologies
}

}
