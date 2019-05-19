import { Component, OnInit } from '@angular/core';
import { ArticleListComponent } from "../article-list/article-list.component";

@Component({
  selector: 'app-sort-parameters',
  templateUrl: './sort-parameters.component.html',
  styleUrls: ['./sort-parameters.component.css']
})
export class SortParametersComponent implements OnInit {

  constructor(private list: ArticleListComponent) { }

  sort_parameter = "views";
  sort_parameters = [
    {
      name: "Популярністю",
      sort_by: "views",
      active: true
    },
    {
      name: "Новизною",
      sort_by: "date",
      active: false
    }
  ];

  ngOnInit() {
  }

  toggleParameters(event) {
    let target_elem = event.target;
    if (!target_elem.classList.contains("sort_active")) {
      target_elem.classList.add("sort_active");
      document.querySelectorAll(".sort_field span").forEach(function(item) {
        if (item != target_elem) {
          item.classList.remove("sort_active");
        }
      })
    }

    this.sort_parameters.forEach(function(item) {
      if (target_elem.innerHTML === item.name) {
        return item.sort_by;
      }
    });
  }
}
