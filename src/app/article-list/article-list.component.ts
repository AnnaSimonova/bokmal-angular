import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from '../services/article.service';
import { Subscription} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    art_section: string = '';
    articles: object = [];
    sortParam: string = "views";
    query: string;
    art_sections_subscr: Subscription;
    articles_list_subscr: Subscription;


    constructor(
        private articleService: ArticleService,
        private activatedRoute: ActivatedRoute,
    ) { }

    updateList(sortBy: string): void {
      this.sortParam = sortBy;
      this.ngOnInit();
    }

    ngOnInit(): void {
        this.art_sections_subscr = this.activatedRoute.params
            .subscribe(params => {
                let art_section = params['art_section'];
                if(art_section.toLowerCase() === 'all') {
                    art_section = '';
                }
                this.getArticles(art_section.toUpperCase());
            });
    }

    getArticles(art_section: string): void {
        this.art_section = art_section;
        this.articles_list_subscr = this.articleService.get(art_section)
            .subscribe(articles => {
                this.articles = articles;
            });
    }

    ngOnDestroy(): void {
        this.art_sections_subscr.unsubscribe();
        this.articles_list_subscr.unsubscribe();
    }
}
