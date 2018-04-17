import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';

/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostService {
  posts = [];
  constructor() {
      this.fillPosts();
  }

  getPosts(){
      return this.posts;
  }


  private fillPosts(){
    let post1: Post = {
      image : './assets/imgs/sky.jpg',
      legend : 'Uhuu!',
      likes : [],
      comments :[]
    } ;


    this.posts.push(post1);
    let post2: Post = {
      image : './assets/imgs/sky.jpg',
      legend : 'Uhuu 2!',
      likes : [],
      comments :[]
    } ;
    this.posts.push(post2);
}

}
