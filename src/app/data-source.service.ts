import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<any> {
      return this.httpClient
          .get("https://jsonplaceholder.typicode.com/posts")

  }

  public setPost(post):Observable<any> {
     return this.httpClient.post("api/todo/save",post)
  }

}
