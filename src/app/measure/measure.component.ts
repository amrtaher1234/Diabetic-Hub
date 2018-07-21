import { Component, OnInit } from '@angular/core';
import { MeasureData } from '../User';
import { RestService } from '../rest.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  measuredata = {} as MeasureData;
  predictedValue : any;
  constructor(private fb : FirebaseService ,
     private rest : RestService) {
    this.measuredata.td="4"; 
   }

  ngOnInit() {
  }

  SubmitData()
  {
    this.rest.getPrediction(this.measuredata)
    .then(data =>{
      console.log(data); 
      this.predictedValue = parseInt(data[0]);
    })
    .catch(err => console.log(err)); 
  }
  UploadData()
  {
    var x = new Date(); 
    this.measuredata.time = x.getDate() + " " + x.getFullYear() + " " + x.getHours() ; 
    this.fb.pushMeasure(this.measuredata).then(d => console.log("success")).catch();
  }
}
