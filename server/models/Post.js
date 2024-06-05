const mongoose = require('mongoose')
const { Schema } = mongoose
const moment = require('moment')
const { Types: {ObjectId} } = Schema


const postSchema = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref:'User'
    },
    title:{
        type: String,
        required: true,
        trim: true// 문자열 양쪽 공백 제거
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    isPrivacy:{
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    memberMax: {
        type: Number,
        default: 6
    }
})

const Post = mongoose.model('Post', postSchema)
model.exports = Post