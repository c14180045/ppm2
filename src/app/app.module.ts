import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputpgComponent } from './inputpg/inputpg.component';
import { EditpgComponent } from './editpg/editpg.component';
import { ListpgComponent } from './listpg/listpg.component';

import {Router, Routes, RouterModule} from '@angular/router';
const ROUTES: Routes=[
  {path:'inputpg', component:InputpgComponent},
  {path:'editpg', component:EditpgComponent},
  {path:'listpg', component:ListpgComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputpgComponent, EditpgComponent, ListpgComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
