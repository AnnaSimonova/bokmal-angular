import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ArticlesResponse } from "../article/articleResponse";
import {Observable} from "rxjs";
import {Article} from "../article/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  get(art_section: string): Observable<Article[]> {
    let getOptions: object = {
      params: { art_section }
    };
    return this.http.get<ArticlesResponse>('articles', getOptions)
        .pipe(
            map((response: ArticlesResponse) => {
              return response.articles;
            })
        );
  }
}

