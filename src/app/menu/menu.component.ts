import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Output() toggleMenuBar = new EventEmitter();

  onMenuToggle() {
    this.toggleMenuBar.emit();
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
