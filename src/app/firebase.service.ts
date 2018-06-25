import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {User , MeasureData , UserInterface} from  './User'; 
import {AngularFireDatabase  } from "angularfire2/database"; 
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable()
export class FirebaseService {
  user : User; 
  _User = {} as UserInterface; 
  userKey: string; 

  constructor(public auth : AngularFireAuth , private db : AngularFireDatabase  , private http: HttpClient ) {

   
   }


  public Register(user : UserInterface)
  {
    this._User = user; 
    return new Promise((resolve , reject) =>{
      this.auth.auth.createUserWithEmailAndPassword(user.email , user.password)
      .then((userData)=>{
        const key = userData.user.uid;
        localStorage.setItem("key" , userData.user.uid); 
        this._User.key= key;  
        this.db.list("/Users").push(this._User).then(last => console.log("success" , last)); 
        resolve(); 
      }).catch(err => {
        console.log(err);
        reject(); 
      }); 
    });
  }

public login(user : UserInterface)
{
  return new Promise((resolve , reject)=>{
    this.auth.auth.signInWithEmailAndPassword(user.email , user.password)
    .then(user => resolve(user))
    .catch(err => reject(err))
  });
}


public pushMeasure(measure : MeasureData  , key )
{
  this.db.list(`/Measures/${key}/Measurements`).push(measure); 
  
}

}

