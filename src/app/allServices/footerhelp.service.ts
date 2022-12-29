import { Injectable } from '@angular/core';
import { Help } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FooterhelpService {
  help:Help[]=[{footerhelp: 'Help & Advice',
  footercareer: 'Career',
  footeraboutus: 'About Us',
  footercontact: 'Contact Us',
  footerblog: 'Blog',
  footerprivacy: 'Privacy pilicy',
  footersitemap: 'Sitemap',}]
  constructor() { }
}
