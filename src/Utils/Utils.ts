import * as crypto from "crypto";
import fs from "fs";

export class Utils {
    static GenerateUniqueId(): string {
        return crypto.randomBytes(16).toString("hex");
    }

    static isNullOrWhitespace(input:string):boolean {

        if (typeof input === "undefined" || input == null){
            return true;
        } 
            
        return input.replace(/\s/g, "").length < 1;
    }

    static async ReadFileAsync(fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, result) => {
                if (err) {
                    console.error(`Error reading: ${fileName}`);
                    reject(err);
                }
                else {
                    resolve(result.toString());
                }
            });
        });
    }

    static async WriteFile(fileName:string, data:string):Promise<void> {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.error(`Error writing: ${fileName}`);
            }
        });

    }
}