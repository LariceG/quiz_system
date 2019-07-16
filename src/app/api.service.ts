import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as myGlobals from './shared/globals';
@Injectable({ 
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: Http) { }

    public register(data)
    {
      return this.http.post(myGlobals.baseUrl+'vendorRegister', JSON.stringify(data)).map(
        (res: Response) => res.json() || {});
    }
    public subscribePlan(data)
    {
      return this.http.post(myGlobals.baseUrl+'subscribePlan', data).map(
        (res: Response) => res.json() || {});
    }
    public login(data)
    {
      return this.http.post(myGlobals.baseUrl+'adminLogin', JSON.stringify(data)).map(
        (res: Response) => res.json() || {});
    }
    public insertQuestion(data)
    {
      return this.http.post(myGlobals.baseUrl+'insertQuestion', data).map(
        (res: Response) => res.json() || {});
    }
    public quizListing()
    {
      return this.http.get(myGlobals.baseUrl+'quizListing').map(
        (res: Response) => res.json() || {});
    }
    public deleteQuestion(id)
    {
      return this.http.get(myGlobals.baseUrl+'deleteQuestion/'+id).map(
        (res: Response) => res.json() || {});
    } 
    public getQuizDetail(id)
    {
      return this.http.get(myGlobals.baseUrl+'getQuizDetail/'+id).map(
        (res: Response) => res.json() || {});
    }   
}
