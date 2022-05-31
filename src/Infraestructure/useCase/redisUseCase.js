import client from '../../persistence/redisConnection.js'

export const getRedisElement = async(key) => {
    const flagRedis = await client.get(`${key}`)
    if(flagRedis) 
        return JSON.parse(flagRedis)
    return null
}

export const setRedisElement = async(key, value) => {
    return await client.set(`${key}`, JSON.stringify(value))
}

export const deleteRedisElement = async(key) => {
    return await client.del(`${key}`)
}