var path = require("path");
var config = require("config");


export class Database
{
    private _pathToDb:string;
    private _users:string = "Users.json";

    get Store():string{
        return this._pathToDb;
    }

    get Users():string{
        return path.join(this._pathToDb, this._users); 
    }
  

    constructor() {
        let dbaseType = config.get("databaseType");
        this._pathToDb = path.join(process.cwd(), config.get(dbaseType + ".name"));
    }
}