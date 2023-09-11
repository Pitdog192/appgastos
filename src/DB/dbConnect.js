import mongoose from 'mongoose'
import config from '../config/config.js'

const DBconnection = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(config.mongoUri)
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }    
}

export default DBconnection
