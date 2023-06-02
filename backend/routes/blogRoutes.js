const express = require('express');
const router = express.Router();
const Blog = require('../models/blogSchema');
const authMiddleware = require('../middlewares/authMiddleware');
const userModel = require('../models/userModel');
const blogSchema = require('../models/blogSchema');

// GET all blogs
router.get('/',async (req, res) => {
  try {
  const blogs = await Blog.find()
  res.json(blogs)
}
  catch(err) {
    console.error(err);
      res.status(500).json({ error: 'Error retrieving blogs' });
  }
});


// GET my blogs
router.get('/myBlogs', authMiddleware ,async (req, res) => {
  try {
  const blogs = await Blog.find({author: req.user._doc.username})
  res.json(blogs)
}
  catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Error retrieving blogs' });
  }
});

// POST a new blog
router.post('/', authMiddleware, (req, res) => {
  const { title, content } = req.body; 
  const newBlog = new Blog({ title, content, author: req.user._doc.username }); 

  newBlog.save()
    .then(savedBlog => {
      res.status(201).json(savedBlog);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error creating blog' });
    });
});

// GET a specific blog by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Blog.findById(id)
    .then(blog => {
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving blog' });
    });
});

// DELETE a specific blog by ID
router.delete('/:id', authMiddleware, (req, res) => {
  const { id } = req.params;

  Blog.findByIdAndDelete(id)
    .then(deletedBlog => {
      if (deletedBlog) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error deleting blog' });
    });
});

router.put("/:id", authMiddleware, async (req, res) => {
  const {id} = req.params
  const {body: updateData} = req

  try {
    const updatedBlog = await blogSchema.findByIdAndUpdate(id, {...updateData})
    res.status(200).json(updatedBlog)
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating blog' });
  }

  
})

module.exports = router;