import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { MeasureComponent } from './measure/measure.component';
import { HistoryComponent } from './history/history.component';
 

const routes: Routes = [

    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path: 'welcome' , component: WelcomeComponent },
    {path:'main' , component:MainComponent , 
   children :[
       {path: '' , component: MeasureComponent }, 
       {path :'history' , component: HistoryComponent},
] },

  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}