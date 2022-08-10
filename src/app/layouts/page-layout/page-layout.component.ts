import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
