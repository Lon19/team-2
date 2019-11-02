import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/',
      icon: 'home-outline'
    },
    {
      title: 'About us',
      url: 'https://www.autistica.org.uk/about-us/about-us',
      icon: 'info'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
