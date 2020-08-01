export class User {

    $id:string;
    FirstName:string;
    LastName:string;
    Email:string;

    constructor(id:string, firstName:string, lastName:string, email:string) {
        this.$id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
    }
}