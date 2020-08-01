import { Request as req, Response as res } from "express";
import { User } from "../models/User";
import { userRepository } from "../data/repository/userRepository";

export class userController {

    //protected _userRepository: userRepository;

    public async GetAllUsers(request: req, response: res) {

        //this wont work
        // let allUsers:User[] = await this._userRepository.GetAll();

        let userRepository1: userRepository = new userRepository();
        let allUsers: User[] = await userRepository1.GetAll();

        if (allUsers != null) {
            response.send(allUsers);
        }
        else {
            response.sendStatus(500);
        }
    }

    public async GetUser(request: req, response: res) {
        try {
            let userId = (request.params.id == undefined ? request.query.id : request.params.id);
            if (userId == undefined) //(Utils.isNullOrWhitespace(userId))
            {
                response.sendStatus(400);
            }
            let userRepository1: userRepository = new userRepository();
            let foundUser: User = (await userRepository1.Find(userId as string))!;
            if (foundUser == undefined) {
                response.sendStatus(400);
            }
            response.send(foundUser);
            //console.info(`Read all the users into memory from ${app.locals.Db}`);
        }
        catch
        {
            response.sendStatus(500);
            console.error("Error Getting Users");
        }
    }

    public async Add(request: req, response: res) {
        if (request.body == undefined ||
            request.body.firstname == undefined ||
            request.body.lastname == undefined ||
            request.body.email == undefined) {
            response.sendStatus(400);
        }

        let userRepository1: userRepository = new userRepository();
        let createdUser: User = await userRepository1.Add(request.body.firstname,
            request.body.lastname,
            request.body.email);
        if (createdUser == undefined) {
            console.log("Adding new user failed");
            response.sendStatus(500);
        }
        console.log(`posted name: ${request.body.lastname}`);
        response.send(createdUser);
    }

    public async Update(request: req, response: res) {
        if (request.body == undefined ||
            request.body.id == undefined ||
            request.body.firstname == undefined ||
            request.body.lastname == undefined ||
            request.body.email == undefined) {
            response.sendStatus(400);
        }

        let userRepository1: userRepository = new userRepository();
        let updateResult: boolean = await userRepository1.Update(request.body.id,
            request.body.firstname,
            request.body.lastname,
            request.body.email);
        if (updateResult) {
            response.sendStatus(200);
        }
        else {
            response.sendStatus(500);
        }
    }

    public async Delete(request: req, response: res) {
        try {
            let userId = (request.params.id == undefined ? request.query.id : request.params.id);
            if (userId == undefined)
            {
                response.sendStatus(400);
                return;
            }

            let userRepository1: userRepository = new userRepository();
            let deleteResult = userRepository1.Delete(userId as string);
            if (deleteResult)
            {
                response.sendStatus(200);
            }
            else
            {
                response.sendStatus(404);
            }
        }
        catch
        {
            response.sendStatus(500);
            console.error("Error Getting Users");
        }
    }


    // constructor(userRepo: userRepository) {
    //     this._userRepository = userRepo;
    // }
}