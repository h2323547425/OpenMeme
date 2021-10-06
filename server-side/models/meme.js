const mongoose = require("mongoose");

const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg|gif|jpeg|webp))/i;
const memeSchema = new mongoose.Schema(
  {
    caption: { type: String, required: false }, // Is this field optional ?
    mediaUrl: { type: String, match: imageUrlRegex, required: true },
    author: {
      userName: { type: String, required: true },
      profilePicture: { type: String, match: imageUrlRegex, required: false },
    }, // [{ type: Schema.Types.ObjectId, ref: 'User' }] instead ?
    likeCount: { type: Number, default: 0 },
    comments: [
      {
        body: { type: String, required: true },
        author: {
          userName: { type: String, required: true },
          profilePicture: {
            type: String,
            match: imageUrlRegex,
            required: false,
          },
        }, // [{ type: Schema.Types.ObjectId, ref: 'User' }] instead ?
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meme", memeSchema);
