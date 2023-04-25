import { Component, Input, OnInit } from '@angular/core';
import { detailmodel } from '../model/getdetails';
import { map } from 'rxjs/operators';
import { getdetailService } from '../services/getdetails.service';
import { EditdetailsService } from '../services/editdetails.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [getdetailService]

})
export class ViewComponent implements OnInit {

  details:detailmodel[] =[];
  detail:detailmodel;
  s_id:any;
  showTable1 = 0;
  search:any;
  
  showConfirmation: boolean = false;
  deteleid: any;

  constructor(private getdetailservice:getdetailService, private edit:EditdetailsService, public router:Router, private location: Location) { 
    this.getDetail();   
  }

  ngOnInit() : void {
  }

  setId(s:any){
    console.log(s);
    
    this.edit.setid(s);
    
  }

  public getDetail(){
    this.search=0;
    this.s_id=this.s_id;
    this.getdetailservice.getDetails()
    .subscribe(data => {
      console.log(data);
      this.details = data;
      console.log(this.s_id);
  })
  }

  deleteconfirm(d:any){
    this.showConfirmation = true;

    this.deteleid=d;

  }

  deleteId(a:any){
    this.edit.setid(this.deteleid);
    console.log(this.deteleid);
    this.edit.deleteitem()
    .subscribe(() => {this.location.replaceState(this.location.path(), '');
    location.reload()
  })
    
    this.showConfirmation = false;
  }

  match(id:any){
    this.getdetailservice.getDetails()
    .subscribe(data => {
      console.log(data);
      this.details = data;
      console.log(this.s_id);
      
      
    
    
    }); 

  }

  searchId(){
    this.search=0;
    this.showTable1 = 1;

    this.s_id = this.s_id;
    this.match(this.s_id);
    console.log(this.search);
    this.edit.setid(this.s_id);
    this.edit.getDetail()
    .subscribe(data => {
      console.log(data);
      this.detail = data;
      console.log(this.detail.id);
      
        // this.showTable1 = !this.showTable1;
        if(data == null){
          this.s_id=0;
      }
    },
    error => {
      // Log the error to the console
      this.search=1;
      this.showTable1 = 0;

      console.log(this.search)
      console.error(error);
      throw error;}); 
  


  }
  

}
