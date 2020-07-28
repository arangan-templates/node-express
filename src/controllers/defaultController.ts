import { Request, Response } from "express";

export const index = (request:Request, response:Response) => {

    response.send(`<h1> Welcome to simple REST API </h1> 
                   <br>
                   ${__dirname}`);
};