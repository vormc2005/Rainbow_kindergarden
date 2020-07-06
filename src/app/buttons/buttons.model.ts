export class Button{
    public name: string;
    public description: string;
    public rusname: string;
    public rusdescription: string;
    
 
    
    constructor(name: string, desc: string, rusname: string, rusdesc: string){
        this.name = name;
        this.description = desc;
        this.rusname = rusname;
        this.rusdescription = rusdesc;
    }
}