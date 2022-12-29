import { Injectable } from '@angular/core';
import { Globalpresence } from './ourglobal';

@Injectable({
  providedIn: 'root'
})
export class OurglobalService {
  globalpresence:Globalpresence[] = [{
    heading: 'India (HQ)',
    description:
      'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,Gujarat 394101',
    num: ' +91 9913 808 285'}
    ,{
    heading: 'U.S.A',
    description: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    num: '+1 (404) 483-3388',}
    ,{
   heading: 'United Kingdom',
    description: '65 Byron road North wembley Middlesex, london HA0 3PB',
    num: '+44 78240 75400',
    //read: 'solutions@taglineinfotech.com',
  }];
  constructor() { }
}
