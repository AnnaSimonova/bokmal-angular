import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  get(art_section) {
    let getOptions = {
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

interface ArticlesResponse {
  articles: article[]
}

interface article {
  art_section: string;
  section_eng: string;
  image_url: string;
  date: number;
  views: number;
  name: string;
}
