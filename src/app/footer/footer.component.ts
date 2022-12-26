import { Component, Input, OnInit } from '@angular/core';

interface Footer{
  footerheading: string,
    footerdesc1:string,
    footerdesc2: string,
    footerdesc3: string,
    footerdesc4: string,
    footerbtn: string,
    footerdes: string
}
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
