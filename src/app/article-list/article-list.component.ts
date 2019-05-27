import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from '../services/article.service';
import {Observable, Subscription } from "rxjs";
import { map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    artSection: string = '';
    articles: object = [];
    sortParam: string = "views";
    query: string;
    sectionSubscription: Observable<object>;
    articleSubscription: Observable<object>;


    constructor(
        private articleService: ArticleService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.getArticlesList();
    }

    getArticlesList() {
        this.sectionSubscription = this.activatedRoute.params;
        this.articleSubscription = this.sectionSubscription.pipe(
            map(params => {
                this.artSection = params['art_section'];
                if (this.artSection.toLowerCase() === 'all') {
                    this.artSection = '';
                }
                return this.artSection;
            }),
           switchMap(artSection => {
                    return this.articleService.get(artSection.toUpperCase());
            }
            ));
    }

    updateList(sortBy: string): void {
        this.sortParam = sortBy;
        this.getArticlesList();
    }
}
