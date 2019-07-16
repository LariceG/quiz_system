import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }  from '@angular/http';
import { interval, Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserID: any = {};
  userName: string;
  userType: string;
  constructor(private http: Http, private router: Router) {

    this.getData();
   }
  getData() {
	
    this.currentUserID = JSON.parse(localStorage.getItem('currentUserID')); 
    //console.log(this.amount); 
  }
  public logout()
  {
      localStorage.removeItem('currentUserID');
      this.currentUserID = null;
      this.router.navigateByUrl('login');
  }
  ngOnInit() {
  }

}
