import { Component, Input, OnInit } from '@angular/core';


interface Experience {
 project:string;
 title:string;
 image:string
}
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
