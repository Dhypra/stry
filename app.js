
const express = require("express")
const app = express();
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/", (req, res) => {
    res.redirect("/")
})
app.post("/short", (req, res) => {
    res.sendFile(__dirname + "/public/short.html")
})

app.post("/long", (req, res) => {
    res.sendFile(__dirname + "/public/long.html")
})

app.listen(3000, (req, res) => {
    console.log("helo");
})

