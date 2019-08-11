export class Post {
    id : number;
    title: String;
    content: String;
    created_at: string;
    loveIts: number = 0;

    constructor(id:number,  titre: string, content: string, created_at : Date) {
        this.id = id;
        this.title = titre;
        this.content = content;
        this.created_at =  created_at.toLocaleDateString();
    }

}
