import { Component, Input, OnInit } from '@angular/core';
import { Help } from '../common';


@Component({
  selector: 'app-footehelp',
  templateUrl: './footehelp.component.html',
  styleUrls: ['./footehelp.component.scss']
})
export class FootehelpComponent implements OnInit {
@Input() footerhelp:Help[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
