import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-tegline',
  templateUrl: './why-tegline.component.html',
  styleUrls: ['./why-tegline.component.scss']
})
export class WhyTeglineComponent implements OnInit {
@Input() infotech:any;
  constructor() { }

  ngOnInit(): void {
  }

}
