export class User{
    constructor(
        public id: number,
        public name: string,
        public surname:string,
        public data:string,
        public age: number,      
        public post:string,
        public work:boolean,
        public adress: string) { }
}