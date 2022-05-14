import { Model } from "sequelize";
import { Recipe } from "../types";

module.exports = (sequelize: any, DataTypes: any) => {
    class Recipes extends Model<Recipe> implements Recipes {
        id!: number;
        name!: string;
        ingredients!: string[];
        image!: string;
    }

    Recipes.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        }
    }, { sequelize, modelName: "recipes" });
    
    return Recipes

}
