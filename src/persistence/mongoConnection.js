import mongo from "../config/mongoSettings.js";
import condorMongo from "@condor-labs/mongodb";

export async function connect() {
    try {
        const mongodb = condorMongo(mongo.mongoDbSettings.Settings);

        await mongodb.getClient()
        console.log(`isConnected(after):${mongodb._isConnected()}`);

    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}
