import express ,{Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";
import * as DBconfig from "../config/db";
export function UserDisplayName(req: Request): string{
    if (req.user){
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
        console.log('user display name called');
    }
    return '';
}

export function AuthGuard(req: Request, res : Response, next : NextFunction) : void
{
    if(!req.isAuthenticated()){

        console.log("Auth guard called of express");
        return res.redirect('/login')
    }
    next();
}

export  function GenerateToken(user:any):string{
    const payload =
        {
            id: user.id,
            DisplayName: user.displayName,
            EmailAddress : user.EmailAddress,
            username: user.username
        }
        const jwrOptions = {
        expiresIn: 604800
        }
        return jwt.sign(payload,DBconfig.SessionSecret ,jwrOptions)
}