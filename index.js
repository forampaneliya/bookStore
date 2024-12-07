const express = require("express");
const port = 6767;
const app = express();
const databaseConnection=require("./config/dbConnection")
// const bookRoute=require("./routes/bookroute")

app.set("view engine", "ejs");
app.use(express.urlencoded())



app.use("/showBook",require("./routes/bookroute"))

app.get("/", (req, res) => {
    return res.render("home");
});

app.listen(port, (err) => {
    if (err) {
        console.error("Server not started:", err);
    } else {
        console.log(`Server started at http://localhost:${port}`);
    }
});