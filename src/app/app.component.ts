import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'kushfinder';
  currentUserID: any = {};
  userName: string;
  userType: string;
  showHead: boolean = false;
  constructor( private router: Router) {
  
    this.getData();
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
		
        if (event['url'] == '/login') {
          this.showHead = false;
		   //console.log("false");
        } else {
			
           //console.log("true");
          this.showHead = true;
        }
		  if (event['url'] == '/home/logout') {
		  localStorage.removeItem('currentUserID');
          this.router.navigateByUrl('/login');
        }
      }
    });
  }
  getData() {
	
    this.currentUserID = JSON.parse(localStorage.getItem('currentUserID')); 
    this.userName = JSON.parse(localStorage.getItem('userName'));
    this.userType = JSON.parse(localStorage.getItem('user_type')); 
    //console.log(this.currentUserID);
  }
  OnInit()
  {
   
  }
}
