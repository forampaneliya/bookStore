const mongoose=require("mongoose")

const bookschema=mongoose.Schema({
    title:String,
    author:String,
    language:String,
    pages:Number,
    price:Number,
    published:String,
    description:String,
    img:String
})
const Book=mongoose.model("Book",bookschema)
module.exports=Book;