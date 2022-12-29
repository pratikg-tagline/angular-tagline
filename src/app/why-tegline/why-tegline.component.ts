import { Component, Input, OnInit } from '@angular/core';
import { WhyteglineService } from '../allServices/whytegline.service';
import { Whytegline } from '../common';


@Component({
  selector: 'app-why-tegline',
  templateUrl: './why-tegline.component.html',
  styleUrls: ['./why-tegline.component.scss']
})
export class WhyTeglineComponent implements OnInit {
infotech:Whytegline[]=[];
  constructor(private whyteglineService:WhyteglineService) { }

  ngOnInit(): void {
    this.infotech=this.whyteglineService.whytegline
  }

}
