import {Component} from '@angular/core';

interface ILink {
  title: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultimate-ng';

  links: ILink[] = [{
    path: '/',
    title: 'Home',
    exact: true
  }, {
    path: '/passengers',
    title: 'Passengers',
    exact: true
  }, {
    path: 'foo',
    title: 'Into the nothing'
  }];
}
