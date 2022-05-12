import { Router } from "express";
import recepiRoutes from "./recipe.router";

const routes = Router();
routes.use(recepiRoutes);


export default routes;