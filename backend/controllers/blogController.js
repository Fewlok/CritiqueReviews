const Blog = require('../models/blogSchema');

// Controller function for creating a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content} = req.body;
    const blog = new Blog({
      title,
      content,
      author: req.user.username,
    });

    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// Controller function for getting all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
};

// Controller function for getting a single blog by its ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params._id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog' });
  }
};

// Controller function for updating a blog by its ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, body } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// Controller function for deleting a blog by its ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};