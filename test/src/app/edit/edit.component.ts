import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { detailmodel } from '../model/getdetails';
import { EditdetailsService } from '../services/editdetails.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  detailEdit:detailmodel=new detailmodel;
  id:any;
  workout_Date: any;
  steps:any;
  distance_km:any;
  caloriesBurned:any;
  heartRate:any;
  sleepDuration:any;

  constructor(private editdetailsService:EditdetailsService, private router:Router) { }

  dataStore(){
    this.editdetailsService.getDetails().subscribe((data) => {
      this.id = data.id;
      this.workout_Date = data.workout_Date;
      this.steps = data.steps;
      this.distance_km = data.distance_km;
      this.caloriesBurned = data.caloriesBurned;
      this.heartRate=data.heartRate;
      this.sleepDuration = data.sleepDuration;
    });
    console.log(this.dataStore.length)
  }

  submitForm(){
    this.detailEdit.id = this.id;
    this.detailEdit.workout_Date = this.workout_Date;
    this.detailEdit.steps = this.steps;
    this.detailEdit.distance_km= this.distance_km;
    this.detailEdit.caloriesBurned = this.caloriesBurned;
    this.detailEdit.heartRate = this.heartRate;
    this.detailEdit.sleepDuration = this.sleepDuration;
    this.editdetailsService.save(this.detailEdit).subscribe(()=> this.router.navigate(['get-details']));
  }

  ngOnInit(): void {
    this.dataStore();
  }

}
