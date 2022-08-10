import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSalaryComponent } from './salary-add/create-salary.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CreateSalaryComponent,
    SalaryListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [
    SalaryListComponent
  ]
})
export class SalaryModule { }
