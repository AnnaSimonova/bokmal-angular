import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  constructor(private app: AppComponent) {
  }

  onMenuToggle() {
    this.app.toggleMenu();
  }

  ngOnInit() {
  }

  sections = [
    {
      name: "ГОЛОВНА",
      link: "/"
    },
    {
      name: "ТОП",
      link: "/"
    },
    {
      name: "ОГЛЯДИ",
      link: "/"
    },
    {
      name: "КОРИСНІ СТАТТІ",
      link: "/recommended"
    },
    {
      name: "НОВИНИ",
      link: "/afisha"
    },
    {
      name: "АВТОРСЬКА КОЛОНКА",
      link: "/"
    },
    {
      name: "ІНТЕРАКТИВ",
      link: "/"
    },
    {
      name: "ЛІТКЛУБ",
      link: "/litclub"
    }
  ]
}
