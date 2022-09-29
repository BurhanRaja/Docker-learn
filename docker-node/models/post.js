const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, require: [true, "Post must have a title."] },
    content: { type: String, require: [true, "Post must have some content."] },
    author: { type: String, require: [true, "Post must have an author."] }
});

const Post = mongoose.model("post", postSchema)
module.exports = Post