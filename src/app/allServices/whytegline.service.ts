import { Injectable } from '@angular/core';
import { Whytegline } from './whytegline';

@Injectable({
  providedIn: 'root'
})
export class WhyteglineService {
  whytegline:Whytegline[] = [
    {
      
      img: '../assets/../assets/images/choose-roadmap.png',
      title: 'Progressive Roadmap',
      heading: '01',
      description:
        'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal andmajor steps to reach that goal. We have a team of developers that uses progressive',
    },
    {
      img: '../assets/../assets/images/choose-project.png',
      title: 'Efficient Project Management',
      heading: '02',
      description:
        'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently',
    },
    {
      img: '../assets/../assets/images/choose-flexible.svg',
      title: 'Flexible Engagement Model',
      heading: '03',
      description:
        'We provide flexible engagement models so that clients can hire developers for their projects. Theseengagement models are flexible so if you aren’t satisfied with any model you can switch to another.',
    },
    {
      img: '../assets/images/choose-cost.png',
      title: 'Cost-Effective',
      heading: '04',
      description:
        'Our team of developers provides the best development services at affordable prices. We believe thathigh-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring',
    },
    {
      img: '../assets/images/choose-delivery.png',
      title: 'Consistent Delivery',
      heading: '05',
      description:
        'Our developers follow an agile approach to deliver the project before the deadline. We are providingconsistent delivery of fully-featured projects as per the client’s requirements.',
    },]
  constructor() { }
}
