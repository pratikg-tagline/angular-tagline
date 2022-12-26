import { Component, Input, OnInit } from '@angular/core';
import { Clientele } from '../common';


 
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
@Input() review:Clientele[]=[]
// @Input() words:any
  constructor() { }

  ngOnInit(): void {
  }

}
