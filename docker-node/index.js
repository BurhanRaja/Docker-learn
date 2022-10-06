const express = require('express')
const connectMongo = require('./mongo-db')
const postRouter = require('./routes/postRoutes')
const authRouter = require('./routes/authRoutes')
const session = require("express-session");
const { redisClient } = require('./redis-db');
const { SESSION_SECRET } = require('./config/config');
let RedisStore = require("connect-redis")(session);

const app = express()
const port = 3000

connectMongo()


// Redis session
redisClient.connect().then(() => {console.log("RedisDB Successfully Connected!")}).catch(console.error)

app.enable("trust proxy")
app.use(session({
        store: new RedisStore({ client: redisClient }),
        secret: SESSION_SECRET,
        cookie: {
            secure: false,
            resave: false,
            saveUninitialized: false,
            httpOnly: true,
            maxAge: 30000,
        }})
)

app.use(express.json())

app.get('/api/v1', (req, res) => {
    res.send('<h2>Hello World!</h2>')
    console.log("Yeah it ran!")
})

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/user", authRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})