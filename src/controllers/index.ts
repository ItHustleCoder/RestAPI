import { logger } from "../utils/logger";
import { Response, Request } from "express";
import RecepiQuery from "../services/ReceptService";


class RouteController {
    async get(req: Request, res: Response) {
        try {
            let query = await RecepiQuery.index();
            res.setHeader('Content-Type', 'application/json').json(query)
            
        } catch (err:any) {
            logger.error(err.message);
            res.end()
        }
    }

    async post(req: Request, res: Response) {
        try {
           let query = await RecepiQuery.create(req.body);
            if (query) {
                res.send("Recipe was created successfully");
            } else {
                res.status(404);
                res.end("Recipe was not created");
            }
        } catch (e: any) {
            logger.error(e.message);
            res.end()
        }
       
    }

    async put(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let query = await RecepiQuery.show(+id);
            if (query) {
                res.setHeader('Content-Type', 'application/json').json(query)  
            } else {
                res.status(404);
                res.send("Oops! Recipe is not available")
            }

        } catch (err: any) {
            logger.error(err.message);
            res.end()
        }

    }
    async patch(req: Request, res: Response) {
         try {
             
             let id = req.params.id;
             let query = await RecepiQuery.update(+id, req.body);
             if (!query) {
                 res.status(405);
                 res.send("Error operation is not permited!");
             }
             return res.status(200).send(`Recipe with id ${req.params.id} - was successfully updated`)

        } catch (err: any) {
            logger.error(err.message);
            res.end()
        }
    }

    async delete(req: Request, res: Response) {
         try {
             let id = req.params.id;
             let query = await RecepiQuery.delete(+id);
             if (!query) {
                res.status(405);
                res.send("Error operation is not permited!");
             }
             return res.status(200).send(`Recipe with id ${req.params.id} - was successfully deleted`)

        } catch (err: any) {
            logger.error(err.message);
            res.end()
        }
    }

}


export default new RouteController();