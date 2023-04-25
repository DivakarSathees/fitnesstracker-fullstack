import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { detailmodel } from '../model/getdetails';
import { getdetailService } from '../services/getdetails.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  detail:detailmodel = new detailmodel;

  constructor(private getdetailservice: getdetailService,public router:Router) { }

  ngOnInit():void {
  }

  adddetails(form:NgForm,workout_Date:Date,steps:number,distance_km:number,caloriesBurned:number,heartRate:number, sleepDuration:number){
    // this.detail.id = 0;
    this.detail.workout_Date = workout_Date;
    this.detail.steps = steps;
    this.detail.distance_km = distance_km;
    this.detail.caloriesBurned = caloriesBurned;
    this.detail.heartRate = heartRate;
    this.detail.sleepDuration = sleepDuration;

    console.log(this.detail);
    
    this.getdetailservice.save(this.detail).subscribe(()=>this.gotoView());
  }

  gotoView(){
    this.router.navigate(['get-details']);
  }

}
