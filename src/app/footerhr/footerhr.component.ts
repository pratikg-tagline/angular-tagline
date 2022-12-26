import { Component, Input, OnInit } from '@angular/core';

interface Hr{
  footerhrhadding: string;
  footeremail: string;
  footerhrnum: string;
  footersaleshadding: string;
  footersalesemail: string;
  footersalesname: string;
}
@Component({
  selector: 'app-footerhr',
  templateUrl: './footerhr.component.html',
  styleUrls: ['./footerhr.component.scss']
})
export class FooterhrComponent implements OnInit {
@Input() footerhr:Hr[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
