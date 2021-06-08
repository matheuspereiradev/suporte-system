import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import Erro from '@shared/errors/AppError';
import { Company } from '@modules/company/infra/typeorm/entities/Company';

interface TokenPayload{
    email:string,
    name:string,
    isAdmin:boolean,
    company:number,
    iat:number,
    exp:number,
    sub:string
}

export default function ensureAuthenticated(request:Request,response:Response,next:NextFunction):void {
    const authHeader = request.headers.authorization;
    
    if(!authHeader){
        throw new Erro("JWT token not definided",1005,403);
    }

    const [,token] = authHeader.split(' ');
    
    const decode = verify(token,authConfig.jwt.secret);

        
    const {sub,email,name,isAdmin,company} = decode as TokenPayload;

    request.user = {
        email:email,
        name:name,
        isAdmin:isAdmin,
        company:company,
        id:sub
    }

    return next();

}