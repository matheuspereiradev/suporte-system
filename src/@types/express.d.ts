declare namespace Express{
    export interface Request{
        user:{
            id:string;
            email:string;
            name:string;
            isAdmin:boolean;
            company:number
        }
    }
}