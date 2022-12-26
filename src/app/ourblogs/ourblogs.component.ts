import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../common';


@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.scss']
})
export class OurblogsComponent implements OnInit {
@Input() blogs:Blogs[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
