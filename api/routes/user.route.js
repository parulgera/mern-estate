import express from 'express'
import { test } from '../controllers/user.controller.js'
// we ned to use use express for creating api routes
// we need to create a router for the user
const router = express.Router()

// we need to create a route for the user
// router.get('/test', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     }) //callback logic should not write here directly, it shoulb in controllers, because this is caled as controller
// })

router.get('/test', test) //callback logic should not write here directly, it shoulb in controllers, because this is caled as controller


export default router