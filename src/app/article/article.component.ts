import { Component, OnInit, Input } from '@angular/core';
import { HighlightSearchPipe } from "../highlight-search.pipe";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article;
  @Input() query;

  constructor() { }

  ngOnInit() {
  }

}
