import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    player: String,
    opponent: String,
    gameName: String,
    note: String,
    winner: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const PostData = mongoose.model('PostData', postSchema);

export default PostData;