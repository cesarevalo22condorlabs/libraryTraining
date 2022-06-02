import Book from '../../persistence/models/books.js'
import { getRedisElement, setRedisElement, deleteRedisElement } from '../../Infraestructure/useCase/redisUseCase.js'
import logger from "@condor-labs/logger"
import * as mongoMethods from './mongoUseCase'

export const listBooks = async() => {
    try {
        return await mongoMethods.findAllElements(Book)
    } catch (error) {
        throw error.message
    }
}

export const createBook = async(bookInput) => {
    try {
        return await mongoMethods.createElement(Book, bookInput)
    } catch (error) {
        throw error.message
    }
}

export const getBooks = async({_id}) => {
    try {
        const flagRedis = await getRedisElement(`${_id}`)
        if(flagRedis) 
            return flagRedis
        
        const data = await mongoMethods.findElement(Book, _id)
        await setRedisElement(`${_id}`, data)
        return data    
    } catch (error) {
        throw error.message
    }
    
}

export const updateBook = async(updateBookInput) => {
    try {
        const flagRedis = await getRedisElement(`${updateBookInput._id}`)
        if(flagRedis)
            await deleteRedisElement(`${updateBookInput._id}`)
        return await mongoMethods.updateElement(Book, updateBookInput)
    } catch (error) {
        throw error.message
    }
    
}

export const deleteBook = async({_id}) => {
    try {
        const flagRedis = await getRedisElement(_id)
        if(flagRedis)
            await deleteRedisElement(_id)
        return await mongoMethods.deleteElement(Book, _id)
    } catch (error) {
        throw error.message
    }
}


