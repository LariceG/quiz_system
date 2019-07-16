import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }  from '@angular/http';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css'],
  providers: [ApiService]
})
export class QuizDetailComponent implements OnInit {
  quizDetail:any = {};
  options:any = [];
  public id: string;
  constructor(private apiService: ApiService, private http: Http, private router: Router, private ActivatedRoute: ActivatedRoute) {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getData();
   }
   public getData()
  {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.apiService.getQuizDetail(this.id).subscribe(
      data => {
        this.quizDetail = data.quizDetail;
        this.options = data.options;
      });
  }
  ngOnInit() {
  }

}
