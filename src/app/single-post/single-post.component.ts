import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  posts;

  constructor(private postsService:PostsService) { 
    this.posts = this.postsService. getPosts();
    
  }
  ngOnInit() {
  }

}
