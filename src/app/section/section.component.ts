import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../common';



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
