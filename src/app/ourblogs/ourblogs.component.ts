import { Component, Input, OnInit } from '@angular/core';

interface Blogs{
   
  img: string,
  btn: string,
  date:string ,
  title: string,
  description:string,
  read:string
}
@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.scss']
})
export class OurblogsComponent implements OnInit {
@Input() blogs:Blogs[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
