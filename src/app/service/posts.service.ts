import { Injectable } from '@angular/core';
import {Post} from '../post';

@Injectable()
export class PostsService {

  private idCount = 0;
  

  private posts:Post[] =[

    {
        id:1, 
        title:'post1', 
        text:'Lorem Ipsum is simply dummy the typesetting industry.Lorem Ipsum has been the industry.',
        created_at:'05-03-2017',
    },

    {
      id:2, 
      title:'post2', 
      text:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      created_at:'01-10-2017',
    },

    {
      id:3, 
      title:'post3', 
      text:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
      created_at:'25-06-2017',
  }


  ]
  public getPostById(id: number ){
    return this.getPosts().find(post => post['id'] == id );
  }

  public getPosts()
  {
    return this.posts;
  }

  public addPost(post:Post) {
    post.id = this.idCount;
    this.posts.push(post);
     this.idCount++;
  }

  constructor() { }

}
