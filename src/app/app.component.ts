import {Component} from '@angular/core';
import {Post} from './classes/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  posts: Array<Post> = [];


  constructor() {
    this.posts.push(new Post('Mon premier Post', 'Donec rutrum congue leo eget malesuada.', 1, new Date()));
    this.posts.push(new Post('Mon deuxieme Post', 'Donec rutrum congue leo eget malesuada.', -1, new Date()));
    this.posts.push(new Post('Mon troixieme Post', 'Donec rutrum congue leo eget malesuada.', 0, new Date()));
  }
}
