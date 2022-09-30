const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, require: [true, "Username is empty."], unique: true },
    email: { type: String, require: [true, "Email is empty."], unique: true },
    password: { type: String, require: [true, "Password is empty."] }
});

const User = mongoose.model("user", userSchema)
module.exports = User