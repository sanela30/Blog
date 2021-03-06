import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';
import {Post} from '../post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

    private post:Post;
    
    constructor(private _postsService: PostsService,private router: Router,private route: ActivatedRoute) { 

      this.post = new Post();

    }

    submitPost(){
    
      this._postsService.addPost(this.post)
      this.router.navigate(['/posts']);
  }


  ngOnInit() {
  }

}
