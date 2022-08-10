import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn = false;
  showProducts = false;
  username: string;


  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) { };

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('isLoggedIn: ', this.isLoggedIn);

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showProducts = true;
      this.username = user.username;
      // this.router.navigate(['/employees']);
    } else {
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
    this.showProducts = false;
  }

}
