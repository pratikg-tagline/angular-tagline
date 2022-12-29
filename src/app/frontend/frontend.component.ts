import { Component, Input, OnInit } from '@angular/core';
import { FrontendService } from '../allServices/frontend.service';
import { Frontend } from '../common';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
frontend:Frontend []=[];
  constructor(private  frontendService : FrontendService ) { }

  ngOnInit(): void {
    this.frontend=this.frontendService.frontend
  }

}
