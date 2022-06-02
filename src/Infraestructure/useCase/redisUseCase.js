import {client} from '../../persistence/redisConnection.js'
import logger from "@condor-labs/logger"


export const getRedisElement = async(key) => {
    try {
    const flagRedis = await client.getAsync(`${key}`)
    
    if(flagRedis) 
        return JSON.parse(flagRedis)
    return null
    } catch (error) {
        logger.error(error)
        throw new Error(error.message)
    }
}

export const setRedisElement = async(key, value) => {
    try {
        return await client.set(`${key}`, JSON.stringify(value))
    }catch (error) {
        logger.error(error)
        throw error
    }
}

export const deleteRedisElement = async(key) => {
    try {
        return await client.del(`${key}`)
    }catch (error) {
        logger.error(error)
        throw error
    }
}