import { Component, OnInit } from '@angular/core';
import {User , UserInterface} from '../User'; 
import {FirebaseService } from '../firebase.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _User= {} as UserInterface; 
  constructor(public router: Router , 
     private fbservice : FirebaseService) { 
  }

  ngOnInit() {
  }

  submit()
  {
    this.fbservice.Register(this._User).then( _ =>  this.router.navigateByUrl('/main')); 
  }
}
