import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';

// import { HemanthComponent } from '../hemanth/hemanth.component'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  showTopBar: boolean = false;
  constructor(private authService: AuthService, private route: Router) {
    
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {         
        console.log("jhgvkjhv",ev);
        ev.url != '/' ? this.showTopBar = true : this.showTopBar = false;
      }
    });
  }
  
  ngOnInit() {
    
  }
  
  
  logOut() {
    this.authService.signOut();
  }
  
}