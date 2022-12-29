import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  footers= {
    footerheading: 'Get latest from Tagline Infotech',
    footerdesc1: 'Share your email so we can send you',
    footerdesc2: 'guides',
    footerdesc3: 'and',
    footerdesc4: 'industry news.',
    footerbtn: 'Subscribe',
    footerdes: 'You can unsubscribe at any time. Read our privacy policy.',}
  constructor() { }
}
