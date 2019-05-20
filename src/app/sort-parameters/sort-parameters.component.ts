import { Component, OnInit } from '@angular/core';
import { ArticleListComponent } from "../article-list/article-list.component";

@Component({
  selector: 'app-sort-parameters',
  templateUrl: './sort-parameters.component.html',
  styleUrls: ['./sort-parameters.component.css']
})
export class SortParametersComponent implements OnInit {

  constructor(private articlesList: ArticleListComponent) { }

  // sort_parameters = [
  //   {
  //     name: "Популярністю",
  //     sort_by: "views",
  //     active: true
  //   },
  //   {
  //     name: "Новизною",
  //     sort_by: "date",
  //     active: false
  //   }
  // ];

  ngOnInit() {
  }

  activeTab = 'views';

  views(activeTab){
    this.activeTab = activeTab;
    this.articlesList.updateList(this.activeTab);
  }

  date(activeTab){
    this.activeTab = activeTab;
    this.articlesList.updateList(this.activeTab);
  }
}
