import { Subject } from 'rxjs';
import { Post } from '../Model/post';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

export class PostService {
    postsSubject = new Subject<Post[]>();

    posts = [new Post(0, "titre1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
    new Post(1, "titre2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."),
    new Post(2, "titre3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")];


    emitPostsSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    //récupère une nouvelle id à utiliser
    getNextId() {
        let maxId = 0;
        this.posts.forEach((e) => {
            if (e.id > maxId) {
                maxId = e.id;
            }
        })
        return ++maxId;
    }

    createPost(titre: string, content: string) {
        this.posts.push(new Post(this.getNextId(), titre, content));

        this.emitPostsSubject();
    }

    public supprimerPost(id: number) {
        this.posts.forEach((item, index) => {
            console.log("item" + item.id);
            if (item.id == id) {
                console.log("id=id")
                this.posts.splice(index, 1);
            }
        });
        this.emitPostsSubject();
    }

    addLove(post: Post) {
        post.loveIts += 1;
        this.emitPostsSubject();
    }

    retireLove(post: Post) {
        post.loveIts -= 1;
        this.emitPostsSubject();
    }

    isLoved(post: Post) {
        return post.loveIts > 0;
    }

    isNotLoved(post: Post) {
        return post.loveIts < 0;
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPostsDatabase() {
        firebase.database().ref('/posts').on(
            'value', (data: Datasnapshot) => {
            this.posts = data.val() ? data.val() : []; this.emitPostsSubject();
        });

    }
}