import { Component, Input, OnInit } from '@angular/core';
import { lang } from '../common';
// interface lang
//   {
//   img: string,
//   heading: string
// }
@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  @Input()
  backend!: lang[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
