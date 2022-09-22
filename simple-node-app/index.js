const express = require('express')

let app = express()

app.get("/", (req, res) => {
    res.send("<h2>Hello World</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Listening to http://localhost:3000 "))