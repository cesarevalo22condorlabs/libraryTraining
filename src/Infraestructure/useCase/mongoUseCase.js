import logger from "@condor-labs/logger"


export const findElement = async(model, _id) => {
    try {
        const data = await model.findById(_id)
        return data
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}

export const findAllElements = async(model) => {
    try {
        const data = await model.find()
        return data
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}

export const createElement = async(model, element) => {
    try {
        const newElement = new model(element)
        await newElement.save()
        return newElement
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}

export const deleteElement = async(model, _id) => {
    try {
        await model.findByIdAndDelete(_id)
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}

export const updateElement = async(model, element) => {
    try {
        const data = await model.findByIdAndUpdate(element._id, element)
        return data
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}
