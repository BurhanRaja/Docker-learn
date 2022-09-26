const mongoose = require('mongoose')

const connectwithRetry = () => {
    mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP_ADDRESS}:${process.env.MONGO_PORT}/?authSource=admin`

    // Only use in production
        // useFindAndModify: false,
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        // replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    ).then(() => console.log("Successfully DB Connected")).catch((e) => {
        console.log(e)
        setTimeout(connectwithRetry, 5000)
    })
}

module.exports = connectwithRetry