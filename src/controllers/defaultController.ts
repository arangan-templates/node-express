import { Request, Response } from "express";
import { dbInit } from "../data/dbInit";


export const index = (request:Request, response:Response) => {
    response.send("<h1> Welcome to simple REST API </h1>");
};

export const seed = (request:Request, response:Response) => {
    var dbinit = new dbInit();
    
    dbinit.SeedUsers(request.app.locals.Db.Users);
    
    console.log("Data file initilized with static data");
    response.sendStatus(200);
};