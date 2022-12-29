import { Injectable } from '@angular/core';
import { Ourblogs } from './ourblogs';

@Injectable({
  providedIn: 'root'
})
export class OurblogsService {
  ourblogs:Ourblogs[]= [{
    
    img: '../assets/images/Python-vs-Java.png',
    btn: 'Python',
    date: '15/12/22',
    title: 'Python vs Java Comparison Of',
    description:
      'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
    read: 'Read More ->'},{
    img: '../assets/images/Node.js-Application.png',
    btn: 'Node Js',
    date: '9/12/22',
    title: 'Best Practices for Node.js Application Development:...',
    description:
      'Quick Summary Want to know about node js architecture and node js architecture best',
    read: 'Read More ->',},{
img: '../assets/images/Kotlin-vs-Java.png',
btn: 'RoR',
date: '9/12/22',
title: 'JavaScript vs Ruby On Rails: What...',
description:
      'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
read: 'Read More ->',
  }];
  constructor() { }
}
