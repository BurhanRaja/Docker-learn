const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongoDb = () => {
    mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo-app-db:27017/?authSource=admin`).then(() => console.log("Successfully DB Connected")).catch((e) => console.log(e))
}

module.exports = connectToMongoDb