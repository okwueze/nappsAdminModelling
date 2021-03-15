import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.mobileMenu = !this.mobileMenu
  }

}
