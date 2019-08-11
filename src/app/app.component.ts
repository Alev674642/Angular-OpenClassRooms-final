import { Component, OnInit } from '@angular/core';
import { PostService } from './Service/Post.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'OpenClassRooms-Angular-application-de-type-blog';
  sousTitre = "Exercice final du cours Angular d'OpenClassRooms.";


  constructor(private postService: PostService) {
    const config = {
      apiKey: "AIzaSyBNGv7CJDTkIKqN-xMcDdbx1K52XSabqUc",
      authDomain: "angular-openclassrooms-final.firebaseapp.com",
      databaseURL: "https://angular-openclassrooms-final.firebaseio.com",
      projectId: "angular-openclassrooms-final",
      storageBucket: "",
      messagingSenderId: "812003674178",
      appId: "1:812003674178:web:6c81aa876a96be88"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}



