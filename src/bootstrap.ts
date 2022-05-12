import dotenv from "dotenv";
import * as path from "path";

let rootPath = path.resolve(__dirname, "../");

dotenv.config({
    path: path.join(rootPath, "./.env")
});

export default dotenv; 