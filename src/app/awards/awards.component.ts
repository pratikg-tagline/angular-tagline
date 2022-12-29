import { Component, Input, OnInit } from '@angular/core';
import { AwardsService } from '../allServices/awards.service';
import { Recognitions } from '../common';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
 
  recognition!: Recognitions;
  constructor(private awardsService:AwardsService) { }

  ngOnInit(): void {
    this.recognition=this.awardsService.awards
  }

}
