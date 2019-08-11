import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../Service/Post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder, 
    private postService : PostService,
    private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    console.log("dans initForm");
    this.postForm=this.formBuilder.group({
      title : ['', Validators.required],
      content : ['', Validators.required]
    });
    console.log(this.postForm);
  }

  onSubmitForm(){
    console.log(this.postForm);
    console.log(this.postForm.value);
    var formValue = this.postForm.value;
    
    this.postService.createPost( formValue['title'],
    formValue['content']);
    
    this.router.navigate(['/posts']);
  }

}
