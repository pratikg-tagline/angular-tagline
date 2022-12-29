import { Component, Input, OnInit } from '@angular/core';
import { OurblogsService } from '../allServices/ourblogs.service';
import { Blogs } from '../common';


@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.scss']
})
export class OurblogsComponent implements OnInit {
 blogs:Blogs[]=[];
  constructor(private ourblogsService:OurblogsService) { }

  ngOnInit(): void {
    this.blogs=this.ourblogsService.ourblogs
  }

}
