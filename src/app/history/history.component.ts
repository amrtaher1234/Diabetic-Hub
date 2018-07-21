import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public fb : FirebaseService, 
  ) 
  { }

  ngOnInit() {
    this.fb.getHistory();
  }

}
