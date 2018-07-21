import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {User , UserInterface} from '../User';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations : [
    trigger("fade" , [
      transition("void => *" , [style({backgroundColor : "white"  , opacity : 0}) , 
      animate(3000 , style({backgroundColor : 'lightgoldenrodyellow' , opacity : 1})) 
    ])
    ])
  ]
})
export class FormComponent implements OnInit {

  constructor(public router: Router , 
     private firebaseservice : FirebaseService) { }


  user = new User('', 1 , '' , ''); 
  incorrect : Boolean; 
  _User ={} as UserInterface; 
  ngOnInit() {
    this.incorrect = false; 
    
  }

  submit()
  {
    this.firebaseservice.login(this._User)
    .then(user => {
      console.log(user)
      localStorage.setItem("key" ,user['user']['uid']);
      this.router.navigateByUrl('/main'); 
      console.log(localStorage.getItem('key'));
    })
    .catch((err) => console.log(err)); 

    // route to main 
  }

}
