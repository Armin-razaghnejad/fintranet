import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { menuItem } from './libs/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItem = menuItem;

  constructor(private primengConfig: PrimeNGConfig,private store:Store) { }

  ngOnInit() {
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }

}
