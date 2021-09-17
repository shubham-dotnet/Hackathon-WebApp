import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  OnSubmit(form : NgForm)
  {
    if(form.value["txtUname"] == "api-admin" && form.value["txtPwd"] == "admin")
    {
      this.router.navigate(['admin-dashboard']);
    }
    
    if(form.value["txtUname"] == "api-user" && form.value["txtPwd"] == "user")
    {
      this.router.navigate(['user-dashboard']);
    }
  }


}
