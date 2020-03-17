import { Component, OnInit, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {


  alerts: Alert[]

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  Applogin: FormGroup;
  email: string = "";
  password: string = "";

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private elementref: ElementRef,
    private renderer: Renderer2
   ) {

    this.Applogin = formbuilder.group({
      email: ['',Validators.email],
      password: ['',Validators.required]
    });
   }

   ngAfterViewInit(){
     this.renderer.setStyle(this.elementref.nativeElement.ownerDocument.body,'backgroundcolour' , 'red');
   }

  
  ngOnInit() {
    
  }

  auth(){
    this.authService.isLoggedUser(this.Applogin.value);
    // console.log(this.Applogin.value)
   
    
  }

  

}
