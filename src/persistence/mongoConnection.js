import {mongo} from "../config/mongoSettings.js";
import condorMongo from "@condor-labs/mongodb";

export async function connect() {
    try {

        const mongodb = condorMongo(mongo);

        await mongodb.getClient()
        console.log(`mongo is conected:${mongodb._isConnected()}`);

    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}
