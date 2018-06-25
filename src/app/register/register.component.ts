import { Component, OnInit } from '@angular/core';
import {User , UserInterface} from '../User'; 
import {FirebaseService } from '../firebase.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _User= {} as UserInterface; 
  constructor(private fbservice : FirebaseService) { 
  }

  ngOnInit() {
  }

  submit()
  {
    this.fbservice.Register(this._User).then( _ => console.log("success x2")); 
  }
}
