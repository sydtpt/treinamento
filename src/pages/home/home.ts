import { PostService } from './../../providers/post-service/post-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostPage } from '../post/post';
import { Post } from '../../models/Post';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private posts: Post[] = [];

  constructor(private navegador: NavController, private postService: PostService, private camera: Camera) {
    this.posts = postService.getPosts();

  }



  navigate(type) {

    if (type === 'camera') {
      this.camera.getPicture().then(
        photo => {
          console.log('tirei a foto');
        }
      ).catch(
        err => {

        }
      );

    }


    this.navegador.push(PostPage,
      {
        tipo_do_param: type
      }
    );
  }

}
