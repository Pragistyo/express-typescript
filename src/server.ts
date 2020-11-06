import Apps from './apps'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
require('dotenv').config();

// import PostsController from './controllers/postsController'
import DoctorController from './controllers/doctor.controller'

const app = new Apps({
    port: 4200,
    controllers: [
        new DoctorController(),
        // new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()