import { Component, OnInit } from '@angular/core';
import { ArticleListComponent } from "../article-list/article-list.component";

@Component({
  selector: 'app-sort-parameters',
  templateUrl: './sort-parameters.component.html',
  styleUrls: ['./sort-parameters.component.css']
})
export class SortParametersComponent implements OnInit {
  activeTab: string = "views";

  constructor(private articlesList: ArticleListComponent) { }

  ngOnInit() {
  }

  views(activeTab: string): void {
    this.activeTab = activeTab;
    this.articlesList.updateList(this.activeTab);
  }

  date(activeTab: string): void {
    this.activeTab = activeTab;
    this.articlesList.updateList(this.activeTab);
  }
}
