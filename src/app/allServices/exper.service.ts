import { Injectable } from '@angular/core';
import { Exper } from './exper';
// import { Exper } from './exper';

@Injectable({
  providedIn: 'root'
})
export class ExperService {
  exper:Exper[]= [
    {
      project: '125+',
      title: 'Professional',

      image: '../assets/../assets/images/contentlogo.webp',
    },
    {
      project: '450+',
      title: 'Completedproject',

      image: '../assets/../assets/images/contentlogo2.webp',
    },
    {
      project: '150+',
      title: 'Freelancehours',

      image: '../assets/../assets/images/contentlogo3.webp',
    },
    {
      project: '+5',
      title: 'Yearsofexperience',

      image: '../assets/../assets/images/contentlogo4.webp',
    },
  ];
  constructor() { }
}
