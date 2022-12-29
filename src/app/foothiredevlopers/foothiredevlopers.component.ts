import { Component, Input, OnInit } from '@angular/core';
import { FooterhiredevloperService } from '../allServices/footerhiredevloper.service';
import { Developer } from '../common';


@Component({
  selector: 'app-foothiredevlopers',
  templateUrl: './foothiredevlopers.component.html',
  styleUrls: ['./foothiredevlopers.component.scss']
})
export class FoothiredevlopersComponent implements OnInit {
 footerdevloper:Developer[]=[];

  constructor(private footerhiredevloperService:FooterhiredevloperService) { }

  ngOnInit(): void {
    this.footerdevloper=this.footerhiredevloperService.hiredevlopers
  }

}
