import { redisSettings, keyName } from '../config/redisSettings'
import redis from '@condor-labs/redis'
import logger from '@condor-labs/logger'


export let client
export const connectRedis = async () => {
    try {
        const redis_set = {
            host: process.env.REDIS_HOST || "127.0.0.1",
            port: process.env.REDIS_PORT || 6379,
            password: process.env.REDIS_PASSWORD || "",
        }

        const _redis = redis(redis_set)

        // get client
        client = await _redis.getClient();

        await client.set("someky", "somevalue");
        const value = await client.getAsync("someky");
        logger.log((value) ? `REDIS Client connected OK!!!` : `REDIS Client connection failed :(`);


    } catch (error) {
        logger.error(error)
    }
}
