import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';
import {Post} from '../post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post:Post;

  constructor(private postsService:PostsService,private router: Router, private route:ActivatedRoute) { 
    
  }
  
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); 
    this.post = this.postsService.getPostById(id);
  }

}
