import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { MeasureData } from './User';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient) { }

  public getPrediction(measure : MeasureData)
  {
    let c = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
   });
   return new Promise((resolve , reject) =>{

    this.http.post("https://algorhym3.pythonanywhere.com/predict" , measure , {headers : c})
    .toPromise().
    then(data => resolve(data))
    .catch(err => reject(err));
   })
   
  }
  public GetPrediction(measure : MeasureData)
  {
    return new Promise((resolve , reject)=>{
      this.http.get(`https://algorhym3.pythonanywhere.com/predict?code=${measure.code}
      &dose=${measure.dose}&reading=${measure.reading}&td=${measure.td}`)
    })
  }
}
