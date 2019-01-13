const express = require("express")
const app = express()
const port = 3000

app.get("/home" , (req, res) => res.send("Good Morning"))
app.get("/aboutUs" , (req, res) => res.send("Good"))
app.listen(port, () => console.log("server is running"))