import {client} from '../../persistence/redisConnection.js'
import logger from "@condor-labs/logger"


export const getRedisElement = async(key) => {
    try {
        console.log('key', key)
    const flagRedisA =  client.get(`${key}`, (err, reply) => {
        //resolve(reply)
        console.log('reply', reply)})
    
    const flagRedisC = await client.getAsync(`${key}`)
    

    console.log('flagRedis', flagRedisC)
    if(flagRedisC) 
        return JSON.parse(flagRedisC)
    return null
    } catch (error) {
        logger.error(error)
        throw new Error(error.message)
    }
}

export const setRedisElement = async(key, value) => {
    return await client.set(`${key}`, JSON.stringify(value))
}

export const deleteRedisElement = async(key) => {
    return await client.del(`${key}`)
}