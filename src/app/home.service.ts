import { Post } from './post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable()
export class HomeService {
  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  getBanners():any {
    return this.http.get("https://apis.evona.ba:15002/bannerApi/banners/0",
    {
      headers: {
      'LanguageId':"en" ,
      'TerminalId': '2222',
      'Device-Type': "Desktop"
    }
    }
    );
  }
  errorHandler(error: HttpErrorResponse){
  return throwError(error.message || "Server Error")
  }
  }


