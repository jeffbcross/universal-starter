import {Component, Directive, ElementRef, Renderer} from 'angular2/core';
import {Route, RouterLink, RouterOutlet, RouteConfig} from 'angular2/router';

@Component({
  template: '<h1>about this thing</h1>'
})
export class About {

}

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // we must interact with the dom through Renderer for webworker/server to see the changes
    renderer.setElementStyle(element, 'fontSize', 'x-large');
  }
}


@Component({
  selector: 'app',
  directives: [ XLarge, RouterOutlet, RouterLink ],
  template: `
  <div>
    <div>
      <span x-large>Hello, {{ name }}!</span>
    </div>
    <router-outlet></router-outlet>

    name: <input type="text" [value]="name" (input)="name = $event.target.value" autofocus>
    <a [routerLink]="['./About']">about</a>
  </div>
  `
})
@RouteConfig([
  new Route({ name: 'About', component: About, path: '/about' })
])
export class App {
  name: string = 'AngularConnect';
}
