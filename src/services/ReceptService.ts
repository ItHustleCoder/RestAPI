import { PostBody , PatchBody} from './../types/index';
import { logger } from "../utils/logger";
import db from "../database";
import moment from "moment";


class RecepiQuery {

    /** 
     * GET request
     * **/
    async index() {
        try {
            return await db.Recipes.findAll();

        } catch (e: any) {
            logger.error(e.message || 'Error in index services');
        }
    }

    /** 
     * POST request
     * **/

    async create(payload: PostBody) {
        try {
            const { name, ingredients, image } = payload;
            //Convert array to STRING
            //Method 2 with JSON.string() rejected
            let stringIngredients = String(ingredients);
            let data = moment().format('YYYY-MM-DD HH:mm');
            
            const storeRecepi = await db.Recipes.create({
                name,
                ingredients: stringIngredients,
                image,
                createdAt: data,
                updatedAt: data
            });

            if (!storeRecepi) return;
            return storeRecepi;

        } catch (e: any) {
            logger.error(e.message || 'Error in create services');
        }

    }

      /** 
     * PUT request
     * **/

    async show(id:number) {
        try {  

            const showRecipe = await db.Recipes.findOne({
                where: {
                    id
                }
            });
            if (!showRecipe) return;
            return showRecipe;
        } catch (e: any) {
            logger.error(e.message || 'Error in edit services');
        }

    }

    /** 
     * PATCH request
     * **/
    async update(id:number, payload: PatchBody) {
        try {
            //Check if exists Recepi
            const { name, ingredients, image } = payload;
            let data = moment().format('YYYY-MM-DD HH:mm');
            
            const checkIfExists = await db.Recipes.findOne({
                where: {
                    id
                }
            });
            if (checkIfExists) {
                const updateRecipe = await db.Recipes.update({
                    name,
                    ingredients:String(ingredients),
                    image,
                    createdAt: data,
                    updatedAt: data
                   
                },
                {
                    where: {id}
                }      
                );

                if (!updateRecipe) return;

                return updateRecipe;
            }
            return;




        } catch (e: any) {
            logger.error(e.message || 'Error in update services');
        }

    }

    /** 
     * DELETE request
     * **/

    async delete(id:number) {
        try {
            const drop = await db.Recipes.destroy({
                where: { id }
            });

            if (!drop) return;

            return drop;


        } catch (e: any) {
            logger.error(e.message || 'Error in delete services');
        }

    }
}

export default new RecepiQuery();
