import express from "express";
import * as defaultController from "../controllers/defaultController";

var defaultRouter = express.Router();

// router.get("/", (req,res) =>{res.redirect("/");});
defaultRouter.get("/", defaultController.index);
defaultRouter.get("/seed", defaultController.seed);

export default defaultRouter;