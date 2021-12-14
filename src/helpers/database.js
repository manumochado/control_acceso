import mongoose from 'mongoose';

import ve from './varsenv'

const connectDB = async () => {
  try {
        const db = await mongoose.connect(ve.uri_db)
        console.log(`Connected to database: ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
}

connectDB()

/*
(
  async () => {
    const db = await mongoose.connect(ve.uri_db)
    console.log(`Connected to database: ${db.connection.name}`)
  } 
)()
*/    
