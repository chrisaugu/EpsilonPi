import {Component, OnInit} from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'sidenav-template',
  templateUrl: 'sidenav.component.html'
})
export class SidenavComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
}
