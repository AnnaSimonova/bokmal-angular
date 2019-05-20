import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from '../article.service';
import { SortPipe } from "../sort.pipe";
import { FormsModule } from "@angular/forms";
import {query} from "@angular/animations";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(
      private articleService: ArticleService,
      private activatedRoute: ActivatedRoute,
  ) { }
    sortParam = "views";

    updateList(sortBy) {
      this.sortParam = sortBy;
      this.ngOnInit();
    }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(params => {
          let art_section = params['art_section'];
          if(art_section.toLowerCase() === 'all') {
            art_section = '';
          }
          this.getArticles(art_section.toUpperCase());
        });
  }

  art_section = '';
  articles = [];
  getArticles(art_section) {
    this.art_section = art_section;
    this.articleService.get(art_section)
        .subscribe(articles => {
          this.articles = articles;
        });
  }
}
