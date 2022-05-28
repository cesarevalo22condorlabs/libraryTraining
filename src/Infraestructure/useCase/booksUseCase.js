import Book from '../../persistence/models/books.js'
import client from '../../redis.js'
import { getRedisElement, setRedisElement, deleteRedisElement } from '../../Infraestructure/useCase/redisUseCase.js'

export const listBooks = async() => {
    return await Book.find()
}

export const getBooks = async({_id}) => {

    const flagRedis = await getRedisElement(`${_id}`)
    if(flagRedis) 
        return flagRedis
    
    const data = await Book.findById(_id)
    await setRedisElement(`${_id}`, data)
    return data
}

export const createBook = async(bookInput) => {
    const newBook = new Book(bookInput)
    console.log("newBook", newBook)
    await newBook.save()
    return newBook
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


