import { DnDUser } from './DnDUser';

export class DnDCharacter {

    private charID: number;
    private creator: DnDUser;
    private datecreated: Date;

    private name: string;
    private level: number;
    private race: string;
    private charClass: string;
    private background: string;
    private alignment: string

    private hitpoints: number;
    private strength: number;
    private dexterity: number;
    private constitution: number;
    private intelligence: number;
    private wisdom: number;
    private charisma: number;
    
    constructor() {

    }


    public getCharID():number {
        return this.charID;
    }


    public getCreator():number {
        return this.creator.getUserID();
    }
    public setCreator(creator:DnDUser) {
        this.creator = creator;
    }


    public getDateCreated():Date {
        return this.datecreated;
    }
    public setDateCreated(datecreated:Date) {
        this.datecreated = datecreated;
    }


    public getName():string {
        return this.name;
    }
    public setName(name:string) {
        this.name = name;
    }


    public getLevel():number {
        return this.level;
    }
    public setLevel(level:number) {
        this.level = level;
    }


    public getRace():string{
        return this.race;
    }
    public setRace(race:string) {
        this.race = race;
    }


    public getCharClass():string {
        return this.charClass;
    }
    public setCharClass(charClass:string) {
        this.charClass = charClass;
    }


    public getBackground():string {
        return this.background;
    }
    public setBackground(background:string) {
        this.background = background;
    }


    public getAlignment():string {
        return this.alignment;
    }
    public setAlignment(alignmnet:string) {
        this.alignment = alignmnet;
    }


    public getHitpoints():number {
        return this.hitpoints;
    }
    public setHitpoints(hitpoints: number) {
        this.hitpoints = hitpoints;
    }


    public getStrength():number {
        return this.strength;
    }
    public setStrength(strength:number) {
        this.strength = strength;
    }


    public getDexterity():number {
        return this.dexterity;
    }
    public setDexterity(dexterity: number) {
        this.dexterity = dexterity;
    }


    public getConstitution():number {
        return this.constitution;
    }
    public setConstitution(constitution: number) {
        this.constitution = constitution;
    }


    public getIntelligence():number {
        return this.intelligence;
    }
    public setIntelligence(intelligence:number) {
        this.intelligence = intelligence;
    }


    public getWisdom():number {
        return this.wisdom;
    }
    public setWisdom(wisdom:number) {
        this.wisdom = wisdom;
    }


    public getCharisma():number {
        return this.charisma;
    }
    public setCharisma(charisma:number) {
        this.charisma = charisma;
    }

}