import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

//here to connect, we get the application string from the mongodb website
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB')
}).catch((err) => { 
    console.log(err)
})
// we cannot use the process.env.MONGO environment variable directly inside the mongoose package, we need to install package dotenv

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
// api routes
// app.get('/test', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/test1', (req, res) => {
//     res.json('Hello World')
// })
// we cannot create all the api's here, we need to create folder

//instead of this, we need to create a proxy
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)