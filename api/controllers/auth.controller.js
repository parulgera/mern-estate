// export const signup = (req, res) => {
//  console.log(req.body)
// }
//we just don't want to do in console.log we want to save in db

import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
const {username, email, password} = req.body
const hashedPassword = bcryptjs.hashSync(password, 10)
const newUser = new User({username, email, password: hashedPassword})
//error handling - will use middleware to handle the error
try {
    await newUser.save()

res.status(201).json({
    message: 'User created successfully',
    user: newUser
})
   } catch (error) {    
    res.status(500).json({
        message: 'User creation failed',
        error: error.message
    })
   }
}
