import { Component, Input, OnInit } from '@angular/core';

interface Wordsdata{
  clienteletitle: string;
  clienteledescription1: string;
  clienteledescription2: string;
}
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
