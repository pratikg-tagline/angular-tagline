import { Injectable } from '@angular/core';
import { Clientele } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  clientele:Clientele[] = [
    {
  
      heading: '5.0',
      desc: 'Everything always turns out perfectly done.',
      des: 'IT & Computer Scientist, Self-Employed',
      review: 'Verified Review',
    },
    {
      heading: '5.0',
      desc: 'They understand complex technical requirements, and they have a team that quickly gets up to speed.',
      des: 'Founder, Cimpro.io',
      review: 'Verified Review',
    },
    {
      heading: '5.0',
      desc: '…theyre able to tackle pretty much everything you throw at them.',
      des: 'CEO, Promoprep',
      review: 'Verified Review',
    },
    {
      heading: '5.0',
      desc: 'When things go wrong, they were good at adapting and problem solving on the fly.',
      des: 'CEO, SupplementSnoop',
      review: 'Verified Review',
    },
    {
      heading: '5.0',
      desc: 'The team takes up new challenges and finishes the project on time.',
      des: 'Software Architect, Specialty Finance Company',
      review: 'Verified Review',
    },
    {
      heading: '5.0',
      desc: 'We are getting close to launch now and its been a tremendous help to have their developers on my team.',
      des: 'Owner, e-Commerce Support Company',
      review: 'Verified Review',
    },
  ];
  constructor() { }
}
