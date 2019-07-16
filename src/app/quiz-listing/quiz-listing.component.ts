import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }  from '@angular/http';
import { Router, NavigationStart } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz-listing',
  templateUrl: './quiz-listing.component.html',
  styleUrls: ['./quiz-listing.component.css'],
  providers: [ApiService]
})
export class QuizListingComponent implements OnInit {
  quiz:any = [];
  constructor(private apiService: ApiService, private http: Http, private router: Router) {
    this.getData();
   }
   public getData()
   {
    this.apiService.quizListing().subscribe(
      data => {
        this.quiz = data.quiz;    
      });
   }
   public deleteQuestion(id)
   {
    this.apiService.deleteQuestion(id).subscribe(
      data => {
        this.quiz = data.quiz;    
      });
   }
  ngOnInit() {
  }

}
