import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
@Input() ourtechnology:any;
  constructor() { }

  ngOnInit(): void {
  }

}
