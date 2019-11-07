import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() sideNavToggle = new EventEmitter<void>();
  openSerachBar = false;
  constructor() { }

  toggleNav() {
    this.sideNavToggle.emit();
  }
  searchBar(){
    this.openSerachBar = !this.openSerachBar;
  }
}
