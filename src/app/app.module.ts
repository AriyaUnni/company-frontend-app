import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import{ HttpClientModule } from '@angular/common/http';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { TestingComponent } from './testing/testing.component';

import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';

const appRoutes:Routes=[
{
  path:"",component:AdminloginComponent
},
{
  path:"addemployee",component:AddemployeeComponent
},
{
  path:"viewemployee",component:ViewemployeeComponent
},
{
  path:"searchemployee",component:SearchemployeeComponent
},
{
  path:"addsecurity",component:AddsecurityComponent
},
{
  path:"viewsecurity",component:ViewsecurityComponent
},
{
  path:"searchsecurity",component:SearchsecurityComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    TestingComponent,
    
    SearchemployeeComponent,
          AddsecurityComponent,
          ViewsecurityComponent,
          SearchsecurityComponent,
          EmployeeloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
