import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { detailmodel } from '../model/getdetails';


@Injectable({
  providedIn: 'root'
})
export class getdetailService {

  private apiUrl: string;

  

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://8080-dffafdafebcfacbdcbaeadbebabcdebdca.project.examly.io/api/FitnessTracker/';
  }

  public getDetails():Observable<detailmodel[]>{
      return this.http.get<detailmodel[]>(this.apiUrl);
      
  }

  public save(detail:detailmodel){
    console.log(detail)
    return this.http.post<detailmodel>(this.apiUrl,detail);
  }

  public getDetail(id:any)
  {

  }
  
}
