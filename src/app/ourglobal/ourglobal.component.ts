import { Component, Input, OnInit } from '@angular/core';
import { OurglobalService } from '../allServices/ourglobal.service';
interface Global{
  heading:string,
  description:string,
  num:string
  }
@Component({
  selector: 'app-ourglobal',
  templateUrl: './ourglobal.component.html',
  styleUrls: ['./ourglobal.component.scss']
})
export class OurglobalComponent implements OnInit {
 ourglobal:Global[]=[];
  constructor(private ourglobalService:OurglobalService) { }

  ngOnInit(): void {
    this.ourglobal=this.ourglobalService.globalpresence
  }

}
