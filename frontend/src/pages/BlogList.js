import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`} className="blog-link">
            <div className="blog-card">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-author">Written by {blog.author}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;