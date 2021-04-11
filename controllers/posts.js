import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post)
      return res
        .status(404)
        .json({ message: `Post with ID of ${id} not found` });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewPost = async (req, res) => {
  try {
    const { title, author, body, genre } = req.body;
    const newPost = await Post.create({
      // in ES6, if the key and the value have the same name, we don't have to state both (like this: title: title)
      title,
      author,
      body,
      genre,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, body, genre } = req.body;
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      { title, author, body, genre },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {}
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.deleteOne({ _id: id });
    res.json({ success: `Post with id of ${id} was deleted` });
  } catch (error) {}
};
