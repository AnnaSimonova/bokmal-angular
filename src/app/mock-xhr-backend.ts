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
      section_ukr: "КОРИСНІ СТАТТІ",
      image_url: "assets/images/article6.PNG",
      date: 1506891268000,
      views: 980,
      name: "Найкращі дитячі ілюстратори незалежної України"
    },
    {
      art_section: "AFISHA",
      section_ukr: "НОВИНИ",
      image_url: "assets/images/article7.PNG",
      date: 1506042000000,
      views: 396,
      name: "Вихідні з дітьми 9-10 вересня"
    },
    {
      art_section: "LITCLUB",
      section_ukr: "ЛІТКЛУБ",
      image_url: "assets/images/article8.PNG",
      date: 1506560400000,
      views: 2045,
      name: "Літклуб Букмоль: розклад на квітень"
    },
    {
      art_section: "RECOMMENDED",
      section_ukr: "КОРИСНІ СТАТТІ",
      image_url: "assets/images/article1.PNG",
      date: 1506891268000,
      views: 1111,
      name: "Найкращі дитячі ілюстратори незалежної України"
    },
    {
      art_section: "AFISHA",
      section_ukr: "НОВИНИ",
      image_url: "assets/images/article11.PNG",
      date: 1525132800000,
      views: 301,
      name: "Вихідні з дітьми 9-10 вересня"
    },
    {
      art_section: "LITCLUB",
      section_ukr: "ЛІТКЛУБ",
      image_url: "assets/images/article3.PNG",
      date: 1558271133000,
      views: 1999,
      name: "Літклуб Букмоль: розклад на квітень"
    }
  ];
}
