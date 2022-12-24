import { Component, Input, OnInit } from '@angular/core';
interface global{
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
@Input() ourglobal:any
  constructor() { }

  ngOnInit(): void {
  }

}
