import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private postsService:PostsService) { 
    this.posts = this.postsService. getPosts();
}

  

  ngOnInit() {
  }

}
