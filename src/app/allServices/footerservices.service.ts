import { Injectable } from '@angular/core';
import { Services } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FooterservicesService {
  services:Services[]=[{footerservices: 'Services',
    footermobile: 'Mobile',
    footerdevelopment: 'web Development',
    footerdesign: 'Web Design',
    footerui: 'UI / UX Design',
    footerdigitalmarketing: 'Digital Marketing',}]
  constructor() { }
}
