import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { detailmodel } from '../model/getdetails';

@Injectable({
  providedIn: 'root'
})
export class EditdetailsService {

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  private apiUrl: string;
  detailId:Observable<any> | undefined;
  detailData:Observable<detailmodel> | undefined;

  constructor(private http: HttpClient) {
    this.apiUrl = "https://8080-dffafdafebcfacbdcbaeadbebabcdebdca.project.examly.io/api/FitnessTracker/";
    
   }

   public getDetails():Observable<detailmodel>{
    console.log(this.detailData);
    // return this.productData;
    return this.http.get<detailmodel>(this.apiUrl);
  }

  setid(data:any){
    this.detailId = data;
    console.log(this.detailId)
    this.apiUrl = "https://8080-dffafdafebcfacbdcbaeadbebabcdebdca.project.examly.io/api/FitnessTracker/"+this.detailId;
  }

  public save(product:detailmodel){
    return this.http.put<detailmodel>(this.apiUrl,product);
}

public deleteitem():Observable<String>{
  return this.http.delete<String>(this.apiUrl);
}

public getDetail():Observable<detailmodel>{
  console.log(this.detailData);
    
    const result = this.http.get<detailmodel>(this.apiUrl);
    console.log(result)
    if(result != null)
    return result;
    else return null;
}
}
