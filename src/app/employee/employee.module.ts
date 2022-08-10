import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './employee-add/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';
 

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
