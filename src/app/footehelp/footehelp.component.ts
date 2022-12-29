import { Component, Input, OnInit } from '@angular/core';
import { FooterhelpService } from '../allServices/footerhelp.service';
import { Help } from '../common';


@Component({
  selector: 'app-footehelp',
  templateUrl: './footehelp.component.html',
  styleUrls: ['./footehelp.component.scss']
})
export class FootehelpComponent implements OnInit {
footerhelp:Help[]=[];
  constructor(private footerhelpService:FooterhelpService) { }

  ngOnInit(): void {
    this.footerhelp=this.footerhelpService.help
  }

}
