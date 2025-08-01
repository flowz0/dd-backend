import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error in getAllBlogs controller");
    res.status(500).json({ message: "Internal server error" });
  }
}

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const {
      author,
      readTime,
      img,
      title,
      summary,
      header,
      paragraph,
      header2,
      paragraph2,
      header3,
      paragraph3,
      header4,
      paragraph4,
      header5,
      paragraph5,
    } = req.body;
    const blog = new Blog({
      author,
      readTime,
      img,
      title,
      summary,
      header,
      paragraph,
      header2,
      paragraph2,
      header3,
      paragraph3,
      header4,
      paragraph4,
      header5,
      paragraph5,
      userId: req.userId,
    });

    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error in createBlog controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const updateBlog = async (req, res) => {
  try {
    const {
      author,
      readTime,
      img,
      title,
      summary,
      header,
      paragraph,
      header2,
      paragraph2,
      header3,
      paragraph3,
      header4,
      paragraph4,
      header5,
      paragraph5,
    } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,
      {
        author,
        readTime,
        img,
        title,
        summary,
        header,
        paragraph,
        header2,
        paragraph2,
        header3,
        paragraph3,
        header4,
        paragraph4,
        header5,
        paragraph5,
      }, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error in updateBlog controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteBlog controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}