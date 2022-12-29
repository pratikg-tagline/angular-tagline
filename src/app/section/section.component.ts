import { Component, Input, OnInit } from '@angular/core';
import { MainsectionService } from '../allServices/mainsection.service';
import { Section } from '../common';



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  
  mainpart!: Section;
  constructor(private mainsectionService:MainsectionService) { }

  ngOnInit(): void {
    this.mainpart=this.mainsectionService.section
  }

}
