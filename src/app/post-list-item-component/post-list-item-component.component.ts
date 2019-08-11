import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Model/post';
import { PostService } from '../Service/Post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  post : Post;

  constructor(private postService : PostService) { }

  ngOnInit() {
  }

  onLoveClick(){
    this.postService.addLove(this.post);
  }

  onDontLoveClick(){
    this.postService.retireLove(this.post);
  }

  isLoved(){
    return this.postService.isLoved(this.post);
  }

  isNotLoved(){
    return this.postService.isNotLoved(this.post);
  }

  onSupprimer(){
    console.log("Suppression du post : "+this.post.id)
    this.postService.supprimerPost(this.post.id);
  }

}
