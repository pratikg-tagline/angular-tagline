import { Component, Input, OnInit } from '@angular/core';
import { Wordsdata } from '../common';


@Component({
  selector: 'app-wordsclient',
  templateUrl: './wordsclient.component.html',
  styleUrls: ['./wordsclient.component.scss']
})
export class WordsclientComponent implements OnInit {
  @Input()
  wordsData!: Wordsdata;
  constructor() { }

  ngOnInit(): void {
  }

}
