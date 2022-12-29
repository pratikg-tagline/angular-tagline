import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainsectionService {
  section={
    mainlogo: '../assets/../assets/images/tagline.png',
    maintitle:'Software Development Company & IT Consultancy',
    starting:'Serving Start-UPs To Fortune 500 ',
    firstp:
      'With the help of Innovation and Technology, We give you the power to <br> change the world with yourideas.',
    clientimg : '../assets/images/images.png',
    OurServices: 'OurServices',
    rightforyou: 'rightforyou',
    Findthe: 'Findthe',
  
  }
  constructor() { }
}
