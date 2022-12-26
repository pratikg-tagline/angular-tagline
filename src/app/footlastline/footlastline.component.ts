import { Component, Input, OnInit } from '@angular/core';
import { Lastline } from '../common';


@Component({
  selector: 'app-footlastline',
  templateUrl: './footlastline.component.html',
  styleUrls: ['./footlastline.component.scss']
})
export class FootlastlineComponent implements OnInit {
@Input() footerlastline: Lastline[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
