import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
      trigger('burgerFirstLine', [
          state('open', style({
            transform: 'rotate(45deg) translate(5px, 6px)'
          })),
        state('close', style({
          transform: 'rotate(0deg) translate(0, 0)'
        })),
        transition('open => close', animate('400ms ease-in-out')),
        transition('close => open', animate('400ms ease-in-out'))
      ]),
    trigger('burgerThirdLine', [
      state('open', style({
        transform: 'rotate(-45deg) translate(1px, -2px)'
      })),
      state('close', style({
        transform: 'rotate(0deg) translate(0, 0)'
      })),
      transition('open => close', animate('400ms ease-in-out')),
      transition('close => open', animate('400ms ease-in-out'))
    ]),
    trigger('burgerOddLine', [
      state('open', style({
        visibility: 'hidden'
      })),
      state('close', style({
        visibility: 'visible'
      })),
      transition('open => close', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  menuState:string = 'in';
  burgerState: string = 'close';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.burgerState = this.burgerState === 'close' ? 'open' : 'close';
  }
}
