import fs from "fs";
import { User } from "../models/User";
import { Utils } from "../Utils/Utils";

export class dbInit {
    SeedUsers(fileName: string): boolean {
        let Users: User[] = new Array();

        Users.push(new User(Utils.GenerateUniqueId(), "Cao", "Cao", "CCao@email.com"));
        Users.push(new User(Utils.GenerateUniqueId(), "Liu", "Bei", "LBei@email.com"));
        Users.push(new User(Utils.GenerateUniqueId(), "Sun", "Quan", "SQuan@email.com"));
        Users.push(new User(Utils.GenerateUniqueId(), "Guan", "Yu", "GYu@email.com"));

        let jsonString: string = JSON.stringify(Users, null, 2);
        console.info(`Writing to file: ${fileName}`);
        fs.writeFile(fileName, jsonString, err => {
            if (err) {
                console.error(`Error: ${err}`);
                return false;
            } else {
                console.info(`Wrote all the users successfully to: ${fileName} `);
                return true;
            }
        });
        return false;
    }
}