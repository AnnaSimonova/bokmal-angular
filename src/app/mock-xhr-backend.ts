import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { HttpBackend } from '@angular/common/http/src/backend';

export class MockXHRBackend implements HttpBackend {
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.indexOf('articles?art_section=') >= 0 || request.url === 'articles') {
            let art_section;
            if (request.urlWithParams.indexOf('?') >= 0) {
              art_section = request.urlWithParams.split('=')[1];
              if (art_section === 'undefined') art_section = '';
            }
            let articles;
            if (art_section) {
              articles = this._articles.filter(article => article.art_section === art_section);
            } else {
              articles = this._articles;
            }
            responseOptions = {
              body: {articles: JSON.parse(JSON.stringify(articles))},
              status: 200
            };
          }
          // else {
          //   let articles;
          //   let id = parseInt(request.url.split('/')[1]);
          //   articles = this._articles.filter(article => article.id === id);
          //   responseOptions = {
          //     body: JSON.parse(JSON.stringify(articles[0])),
          //     status: 200
          //   };
          // }
          // break;
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }

  _articles = [
    {
      art_section: "RECOMMENDED",
      image_url: "assets/images/article6.PNG",
      date: 1506891268,
      views: 980,
      name: "Найкращі дитячі ілюстратори незалежної України"
    },
    {
      art_section: "AFISHA",
      image_url: "assets/images/article7.PNG",
      date: 1506042000,
      views: 145,
      name: "Вихідні з дітьми 9-10 вересня"
    },
    {
      art_section: "LITCLUB",
      image_url: "assets/images/article8.PNG",
      date: 1506560400,
      views: 2045,
      name: "Літклуб Букмоль: розклад на квітень"
    },
    {
      art_section: "RECOMMENDED",
      image_url: "assets/images/article1.PNG",
      date: 1506891268,
      views: 980,
      name: "Найкращі дитячі ілюстратори незалежної України"
    },
    {
      art_section: "AFISHA",
      image_url: "assets/images/article11.PNG",
      date: 1506042000,
      views: 145,
      name: "Вихідні з дітьми 9-10 вересня"
    },
    {
      art_section: "LITCLUB",
      image_url: "assets/images/article3.PNG",
      date: 1506560400,
      views: 2045,
      name: "Літклуб Букмоль: розклад на квітень"
    }
  ];
}
