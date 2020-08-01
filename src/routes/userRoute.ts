import express from "express";
import { userController } from "../controllers/userController";
//import { userRepository } from "../data/repository/userRepository";

var userRoute = express.Router();

const user = new userController();
userRoute.get("/Users", user.GetAllUsers);
userRoute.get("/Users/:id", user.GetUser);
userRoute.post("/Users/Add", user.Add);
userRoute.put("/Users/Update", user.Update);
userRoute.delete("/Users/Delete", user.Delete);

export default userRoute;