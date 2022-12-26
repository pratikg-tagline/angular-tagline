import { Component, Input, OnInit } from '@angular/core';
import { Frontend } from '../common';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
@Input() flang:Frontend []=[];
  constructor() { }

  ngOnInit(): void {
  }

}
