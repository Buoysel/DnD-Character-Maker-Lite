import { DnDCharacter } from './DnDCharacter';

export class DnDUser {
    userID: number;
    username: string;
    email: string;
    password: string;
    characters: DnDCharacter[];

    constructor() {

    }
    
    public getUserID():number {
        return this.userID;
    }

    public getUsername():string {
        return this.username;
    }
    public setUsername(username:string):void {
        this.username = username;
    }

    public getEmail():string {
        return this.email;
    }
    public setEmail(email:string):void {
        this.email = email;
    }

    public getPassword():string {
        return this.password
    }
    public setPassword(password:string):void {
        this.password = password;
    }

    public getCharacters():DnDCharacter[] {
        return this.characters;
    }
}