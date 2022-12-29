import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../allServices/review.service';
import { Clientele } from '../common';


 
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
 review:Clientele[]=[]
// @Input() words:any
  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.review=this.reviewService.clientele
  }

}
