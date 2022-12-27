import { Component, Input, OnInit } from '@angular/core';
// import { Form } from '@angular/forms';

interface Form{
  formsheading: string;
  formbtn: string,
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  ourform!: Form;
  constructor() { }

  ngOnInit(): void {
  }

}
