
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/database")[env];
import { logger } from "../utils/logger";
const db: any = {};


let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


db.Recipes = require('../models/Recipe')(sequelize, Sequelize.DataTypes);

sequelize
  .authenticate()
  .then(() => {
    logger.info("[sequelize]: Connection has been stablised successfully.");
  })
  .catch((err: any) => {
    logger.error("[sequelize]: Unable to connect to the database", err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;