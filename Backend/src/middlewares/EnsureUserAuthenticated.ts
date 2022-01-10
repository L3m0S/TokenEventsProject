import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
};

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const bearerToken = request.headers.authorization;

    if(!bearerToken) {
        return response.status(401).end();
    };

    const [ ,token] = bearerToken.split(" ");

    try {

        const { sub } = verify(token,"3bbbe41566e0706ecb1a9fe7c7eb8b96") as IPayload;
        
        request.user_id = sub;

        return next();
    } catch(err) {
        return response.status(401).end();
    };
   


    
}