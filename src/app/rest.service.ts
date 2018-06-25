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
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': "true" ,
   });
   return new Promise((resolve , reject) =>{

    this.http.post("http://algorhym3.pythonanywhere.com/predict" , measure)
    .toPromise().
    then(data => resolve(data))
    .catch(err => reject(err));
   })
   
  }
}
