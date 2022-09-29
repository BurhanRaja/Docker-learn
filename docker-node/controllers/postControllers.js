const Post = require("../models/post")

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
        res.status(200).json({
            status: "Success",
            result: posts.length,
            data: {
                posts
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Ocurred."
        })
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            data: {
                post
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Ocurred."
        })
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            status: "Success",
            message: "Post Successfully Created."
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Ocurred."
        })
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Success",
            message: "Post Successfully Updated."
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Ocurred."
        })
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Post Successfully Deleted."
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: "Fail",
            message: "Some Error Ocurred."
        })
    }
}