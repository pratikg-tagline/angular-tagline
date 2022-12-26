import { Component, Input, OnInit } from '@angular/core';

interface Experience{
  experiencetitle: string;
  experiencedescription: string;
  button: string;
  experienceimg: string;
}
@Component({
  selector: 'app-experiencedescription',
  templateUrl: './experiencedescription.component.html',
  styleUrls: ['./experiencedescription.component.scss']
})
export class ExperiencedescriptionComponent implements OnInit {
  @Input()
  descexperience!: Experience;
  constructor() { }

  ngOnInit(): void {
  }

}
