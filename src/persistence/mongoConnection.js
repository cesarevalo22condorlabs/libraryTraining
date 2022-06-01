import {mongo} from "../config/mongoSettings.js";
import condorMongo from "@condor-labs/mongodb";
import logger from "@condor-labs/logger";

export async function connect() {
    try {

        const mongodb = condorMongo(mongo);

        await mongodb.getClient()
        logger.log(`mongo is conected:${mongodb._isConnected()}`);

    } catch (error) {
        logger.log("something goes wrong")
        logger.error(error)
    }
}
