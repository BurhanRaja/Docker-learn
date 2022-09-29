const router = require("express").Router()
const pc = require('../controllers/postControllers')

router
    .route("/")
    .get(pc.getAllPosts)
    .post(pc.createPost)

router
    .route("/:id")
    .get(pc.getOnePost)
    .patch(pc.updatePost)
    .delete(pc.deletePost)

module.exports = router