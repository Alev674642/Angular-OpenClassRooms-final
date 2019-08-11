import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Post} from '../Model/post';
import { PostService } from '../Service/Post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html'
})
export class PostListComponentComponent implements OnInit, OnDestroy {
 
  posts :Post[];
  postSubscrition : Subscription;

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postSubscrition = this.postService.postsSubject.subscribe(
      (posts : Post[])=>{
        this.posts = posts;
      });
      this.postService.emitPostsSubject();
  }

  ngOnDestroy(): void {
    this.postSubscrition.unsubscribe();
  }

  savePosts(){
    this.postService.savePosts();
  }

  downloadPosts(){
    this.postService.getPostsDatabase();
  }

}
