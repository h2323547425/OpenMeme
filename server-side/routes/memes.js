const express = require("express");

const router = express.Router();
const {
    getAllMemes,
    getMemeById,
    createMeme,
    updateMemeById,
    deleteMemeById,
    likeMeme,
    postComment,
    deleteCommentById,
    updateCommentById,
    getTopLikedMemes
} = require("../controllers/memes");

router.get("/memes", getAllMemes);
router.get("/memes/:id", getMemeById);
router.post("/memes", createMeme);
router.patch("/memes/:id", updateMemeById);
router.delete("/memes/:id", deleteMemeById);
router.put("/memes/like", likeMeme);
router.post("/memes/comment", postComment);
router.delete("/memes/comment/:id", deleteCommentById);
router.patch("/memes/comment/:id", updateCommentById);
router.get("/topmemes", getTopLikedMemes);
module.exports = router;
