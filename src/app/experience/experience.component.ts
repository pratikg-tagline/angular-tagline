import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../common';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() project: Experience[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
