import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizListingComponent } from './quiz-listing/quiz-listing.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'quiz-listing', component: QuizListingComponent }, 
  { path: 'quiz-detail/:id', component: QuizDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}