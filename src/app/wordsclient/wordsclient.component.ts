import { Component, Input, OnInit } from '@angular/core';
import { WordsclientService } from '../allServices/wordsclient.service';
import { Wordsdata } from '../common';


@Component({
  selector: 'app-wordsclient',
  templateUrl: './wordsclient.component.html',
  styleUrls: ['./wordsclient.component.scss']
})
export class WordsclientComponent implements OnInit {
 
  wordsData!: Wordsdata;
  constructor(private wordsclientService:WordsclientService) { }

  ngOnInit(): void {
    this.wordsData=this.wordsclientService.words
  }

}
