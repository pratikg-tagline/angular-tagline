import { Component, Input, OnInit } from '@angular/core';
import { FooterlastlineService } from '../allServices/footerlastline.service';
import { Lastline } from '../common';


@Component({
  selector: 'app-footlastline',
  templateUrl: './footlastline.component.html',
  styleUrls: ['./footlastline.component.scss']
})
export class FootlastlineComponent implements OnInit {
footerlastline: Lastline[]=[];
  constructor(private footerlastlineService:FooterlastlineService) { }

  ngOnInit(): void {
    this.footerlastline=this.footerlastlineService.lastline
  }

}
