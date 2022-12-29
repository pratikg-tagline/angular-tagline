import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from '../allServices/footer.service';
import { Footer } from '../common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  footer!: Footer;
  constructor(private footerService:FooterService) { }

  ngOnInit(): void {
    this.footer=this.footerService.footers
  }

}
