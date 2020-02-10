import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EnglishComponent } from './components/english/english.component';
import { HindiComponent } from './components/hindi/hindi.component';
import { TamilComponent } from './components/tamil/tamil.component';
import { CommingUpComponent } from './components/comming-up/comming-up.component';
import { RequestComponent } from './components/request/request.component';

const appRoutes:Routes =[
  {path:'home', component:HomeComponent},
  {path:'comingUp', component:CommingUpComponent},
  {path:'request', component:RequestComponent},
  {path:'hindi', component:HindiComponent},
  {path:'tamil', component:TamilComponent},
  {path:'english', component:EnglishComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EnglishComponent,
    HindiComponent,
    TamilComponent,
    CommingUpComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
