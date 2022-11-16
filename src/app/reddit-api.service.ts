import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reddit } from 'src/Reddit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditAPIService {

  baseURL : string = "https://www.reddit.com/r/aww/.json";

  constructor(private http: HttpClient) { }

  GetSubredditData() : Observable <Reddit> 
  {
    return this.http.get<Reddit>(this.baseURL);
  }

}
