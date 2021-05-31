declare namespace Express{
    export interface Request{
        user:{
            email:string;
            name:string;
            company:number;
        }
    }
}