import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

//here to connect, we get the application string from the mongodb website
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB')
}).catch((err) => { 
    console.log(err)
})
// we cannot use the process.env.MONGO environment variabdirectly inside the mongoose package, we need to install package dotenv

const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})