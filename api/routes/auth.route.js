// we need to create a router for the auth
// we need to create sign up api route for authentication, for this we will get the info from client side
// we will use post method to send the info to the server
// we will use the body parser to parse the info from the client
// we will use the jsonwebtoken to generate the token for the user
// we will use the bcrypt to hash the password for the user
// we will use the mongoose to create the user in the database
// we will use the mongoose to create the user in the database

import express from 'express'
import { signup } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)

export default router