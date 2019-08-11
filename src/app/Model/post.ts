export class Post {
    id : number;
    title: String;
    content: String;
    created_at: Date;
    loveIts: number = 0;

    constructor(id:number,  titre: string, content: string) {
        this.id = id;
        this.title = titre;
        this.content = content;
        this.created_at =  new Date();
    }

}
