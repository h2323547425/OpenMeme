const Meme = require("../models/meme");

// Get all Memes
const getAllMemes = async (req, res) => {
    const memes = await Meme.find({}).sort({ createdAt: -1 });
    res.status(200).send(memes);
};

// Get a Meme by id
const getMemeById = async (req, res) => {
    try {
        const meme = await Meme.findOne({ _id: req.params.id });
        res.status(200).send(meme);
    } catch (error) {
        res.status(404);
        res.send({ error: "Meme doesn't exist!" });
    }
};

// Add a new Meme
const createMeme = async (req, res) => {
    const meme = new Meme({
        caption: req.body.caption,
        mediaUrl: req.body.mediaUrl,
        author: {
            userName: req.body.author.userName,
            profilePicture: req.body.author.profilePicture
        }
    });
    await meme.save();
    res.send(meme);
};

// Edit an existing meme
const updateMemeById = async (req, res) => {
    try {
        const meme = await Meme.findOne({ _id: req.params.id });

        if (req.body.caption) {
            meme.caption = req.body.caption;
        }

        if (req.body.mediaUrl) {
            meme.mediaUrl = req.body.mediaUrl;
        }

        await meme.save();
        res.status(200).send(meme);
    } catch {
        res.status(404);
        res.send({ error: "Meme doesn't exist!" });
    }
};

// Delete a Meme
const deleteMemeById = async (req, res) => {
    try {
        await Meme.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Meme doesn't exist!" });
    }
};

// Like a Meme

const likeMeme = async (req, res) => {
    try {
        if (req.body.userName) {
            const meme = await Meme.findOne({ _id: req.body.id });
            meme.likes.likeCount += 1;
            meme.likes.likedBy.push(req.body.userName);
            await meme.save();
            res.status(200).send(meme);
        } else {
            res.status(400).send("UserName required!");
        }
    } catch (err) {
        console.log(err);
        res.status(404);
        res.send({ error: "Meme doesn't exist!" });
    }
};

module.exports = {
    getAllMemes,
    getMemeById,
    createMeme,
    updateMemeById,
    deleteMemeById,
    likeMeme
};
