import Book from '../../persistence/models/books.js'
import { getRedisElement, setRedisElement, deleteRedisElement } from '../../Infraestructure/useCase/redisUseCase.js'
import logger from "@condor-labs/logger"

export const listBooks = async() => {
    return await Book.find()
}



export const createBook = async(bookInput) => {
    const newBook = new Book(bookInput)
    console.log("newBook", newBook)
    await newBook.save()
    return newBook
}

export const getBooks = async({_id}) => {
    try {
        console.log('iam here')
        const flagRedis = await getRedisElement(`${_id}`)
        if(flagRedis) 
            return flagRedis
        
        const data = await Book.findById(_id)
        console.log('data', data)
        await setRedisElement(`${_id}`, data)
        console.log('data', data)
        return data    
    } catch (error) {
        logger.error(error)
    }
    
}

export const updateBook = async(updateBookInput) => {
    const flagRedis = await getRedisElement(`${updateBookInput._id}`)
    if(flagRedis)
        await deleteRedisElement(`${updateBookInput._id}`)
    return await Book.findByIdAndUpdate(updateBookInput._id, updateBookInput, {new: true})
}

export const deleteBook = async(id) => {
    const flagRedis = await getRedisElement(`${id}`)
    if(flagRedis)
        await deleteRedisElement(`${id}`)
    return await Book.findByIdAndDelete(id)
}


