import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../data';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for(post of postData; track post.id) {
    <article class="post">
      <p class="title">{{ post.title }}</p>
      <p class="body">{{ post.body }}</p>
    </article>
    }
  `,
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {

  protected postData: Post[] = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => (this.postData = data));
  }
}
