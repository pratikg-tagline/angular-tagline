import { Component, Input, OnInit } from '@angular/core';
import { FooterhrService } from '../allServices/footerhr.service';
import { Hr } from '../common';


@Component({
  selector: 'app-footerhr',
  templateUrl: './footerhr.component.html',
  styleUrls: ['./footerhr.component.scss']
})
export class FooterhrComponent implements OnInit {
 footerhr:Hr[]=[];
  constructor(private footerhrService:FooterhrService) { }

  ngOnInit(): void {
    this.footerhr=this.footerhrService.hr
  }

}
