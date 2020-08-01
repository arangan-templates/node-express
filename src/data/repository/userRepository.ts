import { User } from "../../models/User";
import app from "../../app";
import { Utils } from "../../Utils/Utils";

export class userRepository {
    
    async GetAll(): Promise<User[]> {
        if (app.locals.Users == null) {
            console.info("userRepository::Loading users");
            let allUsers = await Utils.ReadFileAsync(app.locals.Db.Users);

            // need to valid this schema using https://ajv.js.org/
            try {
                let users: User[] = JSON.parse(allUsers.toString());
                app.locals.Users = users;
            }
            catch{
                app.locals.Users = null;
                console.error("Error parsing JSON file");
            }
        }
        return app.locals.Users;
    }

    async Find(id:string): Promise<User|undefined> {
        if (app.locals.Users == null) {
            let allUsers = await Utils.ReadFileAsync(app.locals.Db.Users);

            // need to valid this schema using https://ajv.js.org/
            try {
                let users: User[] = JSON.parse(allUsers.toString());
                app.locals.Users = users;
            }
            catch{
                app.locals.Users = null;
                console.error("Error parsing JSON file");
                throw("Error parsing JSON file");
            }
        }
        let foundUser:User = app.locals.Users.find((e:User) => e.$id == id);
        return foundUser;         
    }

    async Add(firstName:string, lastName:string, email:string):Promise<User>{
        if (app.locals.Users == null) {
            let allUsers = await Utils.ReadFileAsync(app.locals.Db.Users);

            // need to valid this schema using https://ajv.js.org/
            try {
                let users: User[] = JSON.parse(allUsers.toString());
                app.locals.Users = users;
            }
            catch{
                app.locals.Users = null;
                console.error("Error parsing JSON file");
                throw("Error parsing JSON file");
            }
         }        

         let newUser:User = new User(Utils.GenerateUniqueId(), firstName, lastName, email);
         app.locals.Users.push(newUser);
         let fil:string = app.locals.Db.Users;
         console.log(`Writing users to ${fil}`);
         await Utils.WriteFile(fil, JSON.stringify(app.locals.Users, null, 2));
         return newUser;
    }

    async Update(userId:string, firstName:string, lastName:string, email:string):Promise<boolean>{
        if (app.locals.Users == null) {
            let allUsers = await Utils.ReadFileAsync(app.locals.Db.Users);

            // need to valid this schema using https://ajv.js.org/
            try {
                let users: User[] = JSON.parse(allUsers.toString());
                app.locals.Users = users;
            }
            catch{
                app.locals.Users = null;
                console.error("Error parsing JSON file");
                throw("Error parsing JSON file");
            }
         }        

         let existingUser:User = app.locals.Users.find((e:User)=> e.$id == userId);
         if (existingUser == undefined)
         {
             return false;
         }

         let idx = app.locals.Users.indexOf(existingUser);
         
         existingUser.FirstName = firstName;
         existingUser.LastName = lastName;
         existingUser.Email = email;

         app.locals.Users[idx] = existingUser;

         let fil:string = app.locals.Db.Users;
         console.log(`Writing users to ${fil}`);
         await Utils.WriteFile(fil, JSON.stringify(app.locals.Users, null, 2));
         return true;
    }

    async Delete(userId:string):Promise<boolean> {
        if (app.locals.Users == null) {
            let allUsers = await Utils.ReadFileAsync(app.locals.Db.Users);

            // need to valid this schema using https://ajv.js.org/
            try {
                let users: User[] = JSON.parse(allUsers.toString());
                app.locals.Users = users;
            }
            catch{
                app.locals.Users = null;
                console.error("Error parsing JSON file");
                throw("Error parsing JSON file");
            }
         }
         let idx = app.locals.Users.findIndex((e:User)=> e.$id == userId);
         if (idx == -1)
         {
             return false;
         }

         app.locals.Users.splice(idx,1);
         console.log(`Deleted id: ${userId}`);
         let fil:string = app.locals.Db.Users;
         console.log(`Writing users to ${fil}`);
         await Utils.WriteFile(fil, JSON.stringify(app.locals.Users, null, 2));
         return true;
    }
}