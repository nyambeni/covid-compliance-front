import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  dailyData: any;
  dailyStud: any;
  dailyStaff: any;
  dailyConst: any;
  dailyVis: any;
  dailySymp: any;
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDaily().subscribe( 
      response => {
        this.dailyData = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStud().subscribe( 
      response => {
        this.dailyStud = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyStaff().subscribe( 
      response => {
        this.dailyStaff = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyConst().subscribe( 
      response => {
        this.dailyConst = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailyVis().subscribe( 
      response => {
        this.dailyVis = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

    this.appService.getDailySymp().subscribe( 
      response => {
        this.dailySymp = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });

  }

}
