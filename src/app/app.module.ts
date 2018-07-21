import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'; 
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';

import { AppRoutingModule }     from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MeasureComponent } from './measure/measure.component';
import { HistoryComponent } from './history/history.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { RestService } from './rest.service';

let firebase = {
    apiKey: "AIzaSyC-30waTwPCcTDyvRpWLw72rb7zBl3aIJU",
    authDomain: "diabeticdata.firebaseapp.com",
    databaseURL: "https://diabeticdata.firebaseio.com",
    projectId: "diabeticdata",
    storageBucket: "diabeticdata.appspot.com",
    messagingSenderId: "1022348581186"
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    SliderComponent,
    RegisterComponent,
    WelcomeComponent,
    WelcomeContentComponent,
    MainComponent,
    MeasureComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    HttpClientModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    AppRoutingModule,

  ],
  providers: [
    FirebaseService , RestService],
  bootstrap: [AppComponent]//
})
export class AppModule { }
