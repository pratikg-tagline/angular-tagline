import { Injectable } from '@angular/core';
import { Language } from './all-inter-face';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  language:Language[]= [
    {
      img: '../assets/../assets/images/ror.png',
      heading: 'Ruby on Rails',
    },
    {
      img: '../assets/../assets/images/python.png',
      heading: 'Python',
    },
    {
      img: '../assets/../assets/images/node_js.svg',
      heading: 'Node Js',
    },
    {
      img: '../assets/../assets/images/php.png',
      heading: 'PHP',
    },
    {
      img: '../assets/../assets/images/android-java.png',
      heading: 'Java',
    },
    {
      img: '../assets/../assets/images/go.png',
      heading: 'Go Language',
    },
  ];

  constructor() { }
}
