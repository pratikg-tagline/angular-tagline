import { Component, Input, OnInit } from '@angular/core';
import { Recognitions } from '../common';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @Input()
  recognition!: Recognitions;
  constructor() { }

  ngOnInit(): void {
  }

}
