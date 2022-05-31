import mongoose from "mongoose";
import {generalConfig} from "../config/generalConfig.js";
import mongo from "../config/mongoSettings.js";
import condorMongo from "@condor-labs/mongodb";

export async function connect() {
    try {
        console.log("<<< db conneting")
        condorMongo(mongo.mongoDbSettings);

        await condorMongo.getClient()
        console.log(`isConnected(after):${condorMongo._isConnected()}`);

    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}
