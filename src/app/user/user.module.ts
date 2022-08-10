import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './user-add/create-user.component';
import { UserLogin } from './user-login/user-login.component';

import { UserListComponent } from './user-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
 

@NgModule({
  declarations: [
    CreateUserComponent,
    UserListComponent,
    UserLogin
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    UserListComponent
  ]
})
export class UserModule { }
