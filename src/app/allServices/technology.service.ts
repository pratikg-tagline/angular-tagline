import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  technologies: string[] = [
    'web',
    'mobile',
    'desktop',
    'plateform',
    'database',
    'bigdata',
    'machinelarning',
    'devops',
    'clouds',
  ];
  constructor() { }
}
