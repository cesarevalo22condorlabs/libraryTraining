import mongoose from "mongoose";
import {generalConfig} from "../config/generalConfig";

export async function connect() {
    try {
        console.log("<<< db conneting")

        await mongoose.connect(generalConfig.dataBaseURI, {
            useNewUrlParser: true
        })

        console.log("<<< db connected")
    } catch (error) {
        console.log("something goes wrong")
        console.log(error)
    }
}
