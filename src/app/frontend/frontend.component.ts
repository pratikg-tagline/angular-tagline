import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
@Input() flang:any;
  constructor() { }

  ngOnInit(): void {
  }

}
