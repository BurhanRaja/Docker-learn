const express = require('express')
const connectMongo = require('./db')
const postRouter = require('./routes/postRoutes')
const authRouter = require('./routes/authRoutes')

const app = express()
const port = 3000

connectMongo()

app.get('/', (req, res) => {
    res.send('<h2>Hello World!</h2>')
})

app.use(express.json())

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/user", authRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})