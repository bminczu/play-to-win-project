import mongoose from "mongoose";
import PostData from "../models/postData.js";
import postData from "../models/postData.js";

export const getPosts = async (req, res) => {
    try{
        const postData =  await PostData.find();
        
        res.status(200).json(postData);
    } catch (error) {
        res.status(404).json({message: error.message})
    }


};

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new postData(post);
    try {
        await newPost.save();
        
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(409).json({message: error})
        
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id");

    
    const updatedPost = await postData.findByIdAndUpdate(_id, {...post, _id}, { new: true});

    res.json(updatedPost);

}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id");
    
    await postData.findByIdAndRemove(id);
   
    console.log("delete")
    res.json({message: "Post deleted successfully."});
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id");

    const post = await postData.findById(id); 
    const updatedPost = await postData.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}