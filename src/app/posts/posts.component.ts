import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private http: Http) {  //use private instead of this.http = http
    
  }

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
       this.posts = response.json();
      })
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value}
    input.value = '';

    this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post){
    this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, JSON.stringify({title : 'hello'}) )
      .subscribe(response => {
        console.log(response.json())
      })
  }

  deletePost(post){
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
      console.log(post.id);
  }
}
