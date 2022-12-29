import { Injectable } from '@angular/core';
import { Hiredevlopers } from './footerhiredevloper';

@Injectable({
  providedIn: 'root'
})
export class FooterhiredevloperService {
  hiredevlopers:Hiredevlopers[]=[{footerhiredevelopers: 'Hire Developers',
  footerpython: 'Hire Python Developer',
  footerangular: 'Hire Angular Developer',
  footerror: 'Hire ROR Developer',
  footerflutter: 'Hire Flutter Developer',
  footerreact: 'Hire React Js Developer',
  footerreactnative: 'Hire React Native Developer',}]
  constructor() { }
}
