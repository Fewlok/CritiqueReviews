const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for creating a new blog
router.post('/', authMiddleware, blogController.createBlog);

// Route for getting all blogs
router.get('/', blogController.getAllBlogs);

// Route for getting a single blog by its ID
router.get('/:id', blogController.getBlogById);

// Route for updating a blog by its ID
router.put('/:id', blogController.updateBlog);

// Route for deleting a blog by its ID
router.delete('/:id', blogController.deleteBlog);

module.exports = router;