import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
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
      link: "/all"
    },
    {
      name: "ТОП",
      // link: "/all"
    },
    {
      name: "ОГЛЯДИ",
      // link: "/all"
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
      // link: "/"
    },
    {
      name: "ІНТЕРАКТИВ",
      // link: "/"
    },
    {
      name: "ЛІТКЛУБ",
      link: "/litclub"
    }
  ]
}
