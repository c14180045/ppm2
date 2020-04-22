import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    constructor(private router: Router) {}

  INPUT(){
    this.router.navigate(['inputpg']);
  }
  EDIT(){
    this.router.navigate(['editpg']);
  }
  LIST(){
    this.router.navigate(['listpg']);
  }
}
