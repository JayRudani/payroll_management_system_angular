import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module'
import { SalaryModule } from './salary/salary.module'

import { StateModule } from './state/state.module'
import { UserModule } from './user/user.module'


import { CountryModule } from './country/country.module'
import { DepartmentModule } from './department/department.module'

import { SaluationModule } from './saluation/saluation.module'

import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MonthModule } from './month/month.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmployeeModule,
    StateModule,
    CountryModule,
    DepartmentModule,
    SaluationModule,
    SalaryModule,
    UserModule,
    LayoutsModule,
    MonthModule
  ],

  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
