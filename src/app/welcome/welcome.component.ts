import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  public _LoginBool=false; 
  ngOnInit() {
    localStorage.setItem("test" , "test"); 
  }

  goRegister()
  {
    this._LoginBool=false; 
  }
  goLogin()
  {
    this._LoginBool=true; 
  }
}
