import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  arrayData: any;

  constructor(public appService: AppService, private _router: Router) { }

  ngOnInit(): void {
    this.appService.getStaff().subscribe( 
      response => {
        this.arrayData = response;
      }, error => {
        this._router.navigate(['/login'])
    });
  }

}
