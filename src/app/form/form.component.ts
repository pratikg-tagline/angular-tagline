import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../allServices/form.service';
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

  ourform!: Form;
  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.ourform=this.formService.forms
  }

}
