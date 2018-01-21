import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post [];
  

  constructor(private postsService:PostsService) { }

  

public show(post) {
  alert(`
    Title: ${post.title},
    Text: ${post.text},
    Created at: ${post.created_at}
  `);
}

ngOnInit() {
  this.posts = this.postsService. getPosts();
}
  

}
