import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
 

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
  ]
})
export class LayoutsModule { }
