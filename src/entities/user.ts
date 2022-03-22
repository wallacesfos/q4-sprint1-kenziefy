import { uuid } from "uuidv4";


export class User {
    public readonly id: string;

    public username: string;
    public password: string;
    public playlist: {};

    constructor(props: Omit<User, 'id'>, id?: string){
        this.id = id || uuid()
        this.username = props.username;
        this.password = props.password;
        this.playlist = props.playlist;
    }
}