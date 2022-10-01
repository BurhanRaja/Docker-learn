const router = require("express").Router()
const pc = require('../controllers/postControllers')
const protect = require("../middleware/authMiddleware")

router
    .route("/")
    .get(pc.getAllPosts)
    .post(protect, pc.createPost)

router
    .route("/:id")
    .get(pc.getOnePost)
    .patch(protect, pc.updatePost)
    .delete(protect, pc.deletePost)

module.exports = router