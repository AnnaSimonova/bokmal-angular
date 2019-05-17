import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  get(art_section) {
    console.log(art_section);
    let getOptions = {
      params: { art_section }
    };
    console.log(this.http);
    return this.http.get<ArticlesResponse>('articles', getOptions)
        .pipe(
            map((response: ArticlesResponse) => {
              console.log(response.articles);
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
  image_url: string;
  date: number;
  views: number;
  name: string;
}
