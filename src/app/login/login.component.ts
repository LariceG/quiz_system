import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }  from '@angular/http';
import { Router, NavigationStart } from '@angular/router';
import { ApiService } from '../api.service';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  model: any = {};
  userDetails: any = {};
  successMessage: string;
  errorMessage: string;
  loginSuccessMessage: string;
  loginErrorMessage: string;
  constructor(private apiService: ApiService, private http: Http, private router: Router) {
    this.model.service = '';
  }
  
  public register()
  {
  this.apiService.register(this.model).subscribe(
  data => {	
    if(data.success == 1)
    {
      this.successMessage = data.message;
      this.errorMessage = '';
    }
    else
    {
      this.errorMessage = data.message;
      this.successMessage = '';
    }		
  });
  }
  public login()
  {
  this.apiService.login(this.model).subscribe(
  data => {	
    if(data.success == 1)
    {
      localStorage.setItem('currentUserID',JSON.stringify(data.details.id));
      this.loginSuccessMessage = data.message;
      this.loginErrorMessage = '';
      this.userDetails = data.details;
        this.router.navigateByUrl('/dashboard');
    }
    else
    {
      this.loginErrorMessage = data.message;
      this.loginSuccessMessage = '';
    }		
  });
  }
  ngOnInit() {
    $("#user").focus(function(){
      $("#userIcon").addClass("active");
     });

     $("#pwd").focus(function(){
     $("#pwdIcon").addClass("active");
     });  
     $("#user").focus(function(){
      $("#pwdIcon").removeClass("active");
     });

     $("#pwd").focus(function(){
     $("#userIcon").removeClass("active");
     });
  }

}
