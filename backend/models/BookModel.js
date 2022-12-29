import mongoose from "mongoose";

const Book = mongoose.Schema({
    ISBN:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    Author:{
        type: String,
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    Cover:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    Stock:{
        type: Number,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Status:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Page:{
        type: Number,
        required: true
    },
    Date:{
        type: Date,
        required: true
    },
    Img:{
        type: String,
        required: true
    }
})

export default mongoose.model('books', Book)