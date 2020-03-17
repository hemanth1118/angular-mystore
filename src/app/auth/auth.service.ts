import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Subject, Observable } from 'rxjs';
// import { TopBarComponent } from '../top-bar/top-bar.component'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLogged:boolean = false;
  
  userLoggedIn:Observable<boolean>
  
  username = "mciripuram@gmail.com";
  password1 = "hemanth"
  constructor( private router: Router) { }
  
  login(formData){
    localStorage.setItem('storeObj', JSON.stringify(formData));
  }
  userLogin(){
    return JSON.parse(localStorage.getItem('storeObj'))  != null;
  }
  logout(){
    localStorage.removeItem('storeObj');
  }
  isLoggedUser(formData) {
    if(formData.email == this.username && formData.password == this.password1){
      console.log(this.username);
      this.login(formData)
      this.router.navigate(['/adding']);
      this.isLogged = true;
      console.log(this.isLogged);
      // this.topBarComponent.hide(this.loggedIn.value)
    }
    
  }
  signOut() {
    this.logout();
    this.isLogged = false;
    this.router.navigate(['']);
  }
}
