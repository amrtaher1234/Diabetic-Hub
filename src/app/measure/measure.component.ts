import { Component, OnInit } from '@angular/core';
import { MeasureData } from '../User';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  measuredata = {} as MeasureData;
  predictedValue : any;
  constructor(private rest : RestService) {
    this.measuredata.td="4"; 
   }

  ngOnInit() {
  }

  SubmitData()
  {
    this.rest.getPrediction(this.measuredata)
    .then(data =>this.predictedValue = parseInt(data[0]))
    .catch(err => console.log(err)); 

  }
}
