import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app/app.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  constructor(private app: AppComponent) {
  }

  onMenuToggle(): void {
    this.app.toggleMenu();
  }

  ngOnInit(): void {
  }

  sections: object = [
    {
      name: "ГОЛОВНА",
      link: "/all"
    },
    {
      name: "ОГЛЯДИ",
      link: "/reviews"
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
      link: "/author"
    },
    {
      name: "ПОРАДИ",
      link: "/advice"
    },
    {
      name: "ЛІТКЛУБ",
      link: "/litclub"
    }
  ]
}
