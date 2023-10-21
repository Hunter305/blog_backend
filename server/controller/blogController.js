import Blog from "../model/blogModel.js";

export const addBlog = async (req, res) => {
  try {
    const { blog, image } = req.body;

    //Create new blog
    const blog_ = await Blog.create({ user: req.user._id, blog, image });

    res.json({ success: true, message: "Blog added Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const allBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs) res.status(200).json(blogs);
    else
      res
        .status(400)
        .json({ message: "Error Occurred. Failed to get the blogs" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const givenBlog = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, givenBlog, {
      new: true,
    });
    if (!updatedBlog)
      return res
        .status(400)
        .json({ message: "Error Occurred While updating the blog" });

    res.json({ message: "Blog updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog)
      return res
        .status(400)
        .json({ message: "Error Occurred. Blog not found" });
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
