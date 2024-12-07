const express = require("express")
const Book = require("../model/bookstore.model")
const bookRoutes = express.Router()

bookRoutes.get("/", async (req, res) => {
     // let books  = await Book.find();
     // console.log(users);
     return res.render('showBook');
})

bookRoutes.get("/books", async (req, res) => {
     let books = await Book.find();

     res.render("books",{books})

})
bookRoutes.post("/addbook", async (req, res) => {
     let newbook = await Book.create(req.body)
     if (newbook) {
          console.log("book added");
          return res.redirect("/showBook/books")

     }
     else {
          console.log("something wrong");
          return res.redirect("/showBook/books");


     }
})
bookRoutes.get("/deleteBook/:id",async(req,res)=>{
     let id=req.params.id;
     console.log(id);
     
     if(id)
     {
        await Book.findByIdAndDelete(id)
        return res.redirect("/showBook/books")
     }
     else{
          console.log("something wrong");
          return res.redirect("/showBook/books")

          
     }
})
bookRoutes.get("/editbook/:id" , async(req,res)=>{
     console.log(req.params.id);
     // console.log(req.body);
     
     
     let book=await Book.findById(req.params.id)
     console.log(book);
     
     if(book)
     {
         res.render("editdata",{book:book})
     }
     else{
          console.log("something wrong");
          return res.redirect("/showBook/books")
          
     }
})

bookRoutes.post("/updatedata/:id",async(req,res)=>{
     let book=Book.findById(req.params.id)
     if(book)
     {
          await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
          return res.redirect("/showBook/books")
     }
     else{
          console.log("something wrong");
          return res.redirect("/showBook/books")

          
     }
})
module.exports = bookRoutes;