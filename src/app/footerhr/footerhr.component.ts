import { Component, Input, OnInit } from '@angular/core';
import { Hr } from '../common';


@Component({
  selector: 'app-footerhr',
  templateUrl: './footerhr.component.html',
  styleUrls: ['./footerhr.component.scss']
})
export class FooterhrComponent implements OnInit {
@Input() footerhr:Hr[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
