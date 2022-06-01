import {Settings, keyName} from '../config/redisSettings'
import redis from '@condor-labs/redis'


export let client
export const connectRedis = async () => {
    try {
        const _redis = redis(Settings)

        // get client
        client = await _redis.getClient();
        
        // prepare and execute batch in redis
        const redisBatch = client.batch();
        await redisBatch.incr(keyName);
        await redisBatch.expire(keyName, 1);
        const resolve = await redisBatch.execAsync();
        // validate response
        console.log((resolve && resolve.length > 0 && resolve[0] > 0) ? `REDIS Client connected OK!!!` : `REDIS Client connection failed :(`);
        // close app
       

    } catch (error) {
        console.error(error)
    }
}
