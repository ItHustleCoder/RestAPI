import express, { Request, Response } from "express";
import  RouteController  from "../controllers/index";

const recepiRoutes = express.Router();

recepiRoutes.get("/recipes", RouteController.get)
recepiRoutes.post("/recipes", RouteController.post)
recepiRoutes.put("/recipes/:id", RouteController.put)
recepiRoutes.patch("/recipes/:id", RouteController.patch)
recepiRoutes.delete("/recipes/:id", RouteController.delete)



export default recepiRoutes;