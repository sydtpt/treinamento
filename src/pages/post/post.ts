import { PostService } from './../../providers/post-service/post-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  tipo:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostService) {
  }

  ionViewDidLoad() {
    this.tipo = this.navParams.get('tipo_do_param');



    console.log(this.tipo);
  }

}
