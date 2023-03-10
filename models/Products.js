import mongoose from "mongoose";
import { Schema } from "mongoose";



const Product = mongoose.model('products', new Schema({
    name : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    seller : {
        type : String,
        required : true
    }
}))

export default Product