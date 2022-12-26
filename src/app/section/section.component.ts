import { Component, Input, OnInit } from '@angular/core';


interface Section{
  maintitle:string;
  starting:string;
  firstp:
   string;
  clientimg:string;
  OurServices:string;
  rightforyou:string;
  Findthe:string;

}
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input()
  mainpart!: Section;
  constructor() { }

  ngOnInit(): void {
  }

}
