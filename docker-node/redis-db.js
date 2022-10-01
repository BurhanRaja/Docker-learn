const redis = require("redis");
const { REDIS_IP, REDIS_PORT } = require('./config/config')

exports.redisClient = redis.createClient({
    legacyMode: true,
    socket: {
        port: REDIS_PORT,
        host: REDIS_IP
    }
})