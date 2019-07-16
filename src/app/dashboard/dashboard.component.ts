import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }  from '@angular/http';
import { Router, NavigationStart } from '@angular/router';
import { FormBuilder,FormGroup,FormArray, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {
  currentUserID:any = {};
  dispensaries:any = [];
  countries:any = [];
  amount: string;
  model: any = {};
  submitted = false;
  addForm: FormGroup;
  constructor(private apiService: ApiService, private http: Http, private router: Router, private fb: FormBuilder) {

    this.addForm = this.fb.group({
      question: ['',Validators.required],
      is_right_answer: [''],
      option_data: this.fb.array([this.initOption()]),
    });
    this.getData();
    //console.log(this.addForm.controls.option_data['controls']);
   }
   initOption() {
    return this.fb.group({
      option: [''],
      is_right_answer: ['']
    });
  }

  addOption() {
    const control = < FormArray > this.addForm.controls['option_data'];
    control.push(this.initOption());
    //this.step2Element.push(this.step2Element.length);
  }
  deleteOption(index) {
    const control = < FormArray > this.addForm.controls['option_data'];
    control.removeAt(index);
    //this.step3Element.splice(index, 1);
  }
  public submitQuestion()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      window.scrollTo(0, 0)
        return;
    }
    //console.log(this.addForm.value); return false;
    this.apiService.insertQuestion(JSON.stringify(this.addForm.value)).subscribe(
      data => {
        if(data.success == 1)
        {
          this.router.navigateByUrl('/quiz-listing');
        }           
      });
  }
   public getData()
   {

   }
   get f() { return this.addForm.controls; }
    ngOnInit() {
    $("#create-quiz-btn").click(function () {
      $("#create-quiz").show();
      $("#create-quiz").css({"height":"auto", "top":"0", "opacity":"1" });
     
  });
  $("#create-quiz-btn").click(function () {
      $("#create-quiz-btn").hide();            
  });
 
  }
  

}
