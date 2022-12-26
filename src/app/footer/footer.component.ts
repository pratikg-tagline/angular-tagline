import { Component, Input, OnInit } from '@angular/core';
import { Footer } from '../common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  footer!: Footer;
  constructor() { }

  ngOnInit(): void {
  }

}
