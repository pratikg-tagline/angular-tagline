import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  forms = {
    formsheading: 'Get Your Free Quote Today',
    formbtn: 'Send Message',
  };
  constructor() { }
}
