import { Injectable } from '@angular/core';
import { Frontend } from './frontend';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
  frontend:Frontend[] = [
    {
      img: '../assets/../assets/images/react-js.png',
      heading: 'React Js',
    },
    {
      img: '../assets/../assets/images/angular-icon.png',
      heading: 'Angular',
    },
    {
      img: '../assets/../assets/images/typescript-icon.png',
      heading: 'Typescript',
    },
    {
      img: '../assets/../assets/images/vue-js.png',
      heading: 'Vue Js',
    },
    {
      img: '../assets/../assets/images/meter-js.png',
      heading: 'Mateor Js',
    },
    {
      img: '../assets/../assets/images/javascript-icon.png',
      heading: 'Java Script',
    },
    {
      img: '../assets/../assets/images/html5.png',
      heading: 'HTML 5',
    },
  ];
  constructor() { }
}
