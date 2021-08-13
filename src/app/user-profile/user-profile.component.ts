import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  arrayData: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getStaff().subscribe( 
      response => {
        this.arrayData = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });
  }

}
