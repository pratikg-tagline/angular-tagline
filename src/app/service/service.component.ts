import { Component, Input, OnInit } from '@angular/core';

interface OurServices{
     madimg: string;
     madtitle: string;
     maddescription: string;
     learnmore: string;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
@Input() inputData:any
@Input() project:any
  constructor() { }

  ngOnInit(): void {
  }

}
