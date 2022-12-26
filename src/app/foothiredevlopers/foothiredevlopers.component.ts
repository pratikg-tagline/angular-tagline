import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../common';


@Component({
  selector: 'app-foothiredevlopers',
  templateUrl: './foothiredevlopers.component.html',
  styleUrls: ['./foothiredevlopers.component.scss']
})
export class FoothiredevlopersComponent implements OnInit {
@Input() footerdevloper:Developer[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
