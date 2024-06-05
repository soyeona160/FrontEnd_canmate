const express = require('express')
const User = require('../models/User') 
const expressAsyncHandler = require('express-async-handler')
const {generateToken , isAuth} = require('../../auth')
const {validationResult, oneOf} = require('express-validator')
const { validateName, validateEmail, validateUserPassword} = require('../../validator')
const router = express.Router()
const { limitUsage } = require('../../limiter')


router.post('/register')

router.post('/login')

router.