const express = require("express");

const router = express.Router();
const {
    getAllMemes,
    getMemeById,
    createMeme,
    updateMemeById,
    deleteMemeById,
    likeMeme
} = require("../controllers/memes");

router.get("/memes", getAllMemes);
router.get("/memes/:id", getMemeById);
router.post("/memes", createMeme);
router.patch("/memes/:id", updateMemeById);
router.delete("/memes/:id", deleteMemeById);
router.post("/memes/like", likeMeme);

module.exports = router;
