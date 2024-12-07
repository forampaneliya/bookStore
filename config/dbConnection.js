const mongoose=require("mongoose")

const databaseConnection=()=>{
    mongoose.connect("mongodb://localhost:27017/bookstore")
    .then(()=>{
       console.log("db connected");
       
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
module.exports=databaseConnection()