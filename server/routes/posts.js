const mongoose = require('mongoose')
const { Types : {ObjectId}} = mongoose
const express = require('express')
const Post = require('../models/Post') 
const expressAsyncHandler = require('express-async-handler')
const { isAuth } = require('../auth')
const router = express.Router()
const {validateTodoTitle, validateTodoDescription, validateTodoCategory} = require('../../validator')
const { validationResult, oneOf } = require('express-validator')

router.get('/')
router.post('/write', expressAsyncHandler( async(req,res,next)=>{

    const post = new Post({
        author: req.user._id,
        title: req.user.title,
        description: req.user.description,
        isPrivacy: req.user.isPrivacy,
        
    })
}))

router.delete('/')