import { Injectable } from '@angular/core';
import { Lastline } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FooterlastlineService {
  lastline:Lastline[]=[{footerfollow: 'Follow Us',
  footer2022: '2022',
  footerreserved: 'All rights reserved by',
  footercompanyname: 'Tagline Infotech LLP',}]
  constructor() { }
}
