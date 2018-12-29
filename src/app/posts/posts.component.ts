import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        console.log(response.json());
      })
  }
}
