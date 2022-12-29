import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  awards = {
    awardstitle1: 'Awards &',
    awardstitle2: ' Recognitions',
    awardsimg1: '../assets/images/award-2.webp',
    awardsimg2: '../assets/images/award-3.webp',
    awardsimg3: '../assets/images/award-4.webp',
    awardsimg4: '../assets/images/award-5.webp',
    awardsimg5: '../assets/images/award-6.webp',
  };
  constructor() { }
}
