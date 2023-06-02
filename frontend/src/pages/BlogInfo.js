import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useAuthContext } from "../hooks/useAuthContext";

const BlogInfo = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
      headers:{
        "auth-token": user?.token
      }
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-info">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="blog-details">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author">Written by {blog.author}</p>
          <div className="blog-content">{blog.content}</div>
          {user?.username === blog.author && <button className="delete-button" onClick={handleClick}>
            Delete
          </button>}
          
          {user?.username === blog.author && <button onClick={() => navigate(`/updateBlog/${blog._id}`)} className="delete-button">
            Update
          </button>}
        </article>
      )}
    </div>
  );
};

export default BlogInfo;