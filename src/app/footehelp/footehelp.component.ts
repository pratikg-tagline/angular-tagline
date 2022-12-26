import { Component, Input, OnInit } from '@angular/core';

interface Help{
  footerhelp: string;
  footercareer: string;
  footeraboutus: string;
  footercontact: string;
  footerblog: string;
  footerprivacy: string;
  footersitemap: string;
}
@Component({
  selector: 'app-footehelp',
  templateUrl: './footehelp.component.html',
  styleUrls: ['./footehelp.component.scss']
})
export class FootehelpComponent implements OnInit {
@Input() footerhelp:Help[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
