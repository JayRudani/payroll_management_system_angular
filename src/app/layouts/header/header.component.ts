import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails = "";
  constructor(private tokenStorageService: TokenStorageService,) { }

  ngOnInit(): void {
    this.userDetails = this.tokenStorageService.getUser();
    console.log("Login User Details");
    console.log(this.userDetails)
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
