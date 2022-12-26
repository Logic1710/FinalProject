import mongoose from "mongoose";

const Book = mongoose.Schema({
    ISBN:{
        type: Number,
        required: false
    },
    name:{
        type: String,
        required: false
    },
    Author:{
        type: String,
        required: false
    },
    Language:{
        type: String,
        required: false
    },
    Cover:{
        type: String,
        required: false
    },
    Category:{
        type: Array,
        required: false
    },
    Stock:{
        type: Number,
        required: false
    },
    Price:{
        type: Number,
        required: false
    },
    Status:{
        type: Boolean,
        required: false
    },
    Description:{
        type: String,
        required: false
    },
    Page:{
        type: Number,
        required: false
    },
    Date:{
        type: String,
        required: false
    }
})

export default mongoose.model('books', Book)