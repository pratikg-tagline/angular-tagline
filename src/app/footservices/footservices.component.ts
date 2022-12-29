import { Component, Input, OnInit } from '@angular/core';
import { FooterservicesService } from '../allServices/footerservices.service';
import { Services } from '../common';


@Component({
  selector: 'app-footservices',
  templateUrl: './footservices.component.html',
  styleUrls: ['./footservices.component.scss']
})
export class FootservicesComponent implements OnInit {
 footerservices:Services[]=[];
  constructor(private footerservicesService:FooterservicesService) { }

  ngOnInit(): void {
    this.footerservices=this.footerservicesService.services
  }

}
