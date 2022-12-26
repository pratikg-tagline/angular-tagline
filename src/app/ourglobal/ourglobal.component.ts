import { Component, Input, OnInit } from '@angular/core';
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
@Input() ourglobal:Global[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
