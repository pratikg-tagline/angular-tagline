import { Injectable } from '@angular/core';
import { Hr } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FooterhrService {
  hr:Hr[]=[{footerhrhadding: 'HR Inquiry',
  footeremail: 'hr@taglineinfotech.com',
  footerhrnum: '+91 6354362521',
  footersaleshadding: 'Sales Inquiry',
  footersalesemail: 'solutions@taglineinfotech.com',
  footersalesname: ' Tagline infotech',}]

 
  constructor() { }
}
