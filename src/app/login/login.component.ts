import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    let newLogin = {
      username: loginForm.value.username,
      password: loginForm.value.password,
    }

    this.appService.login(newLogin).subscribe( 
      (data: any) => {
        console.log(data)
      }, (error: any) => {
        console.log(error, 'POST LOGIN error!!!')
    });
  }
}
