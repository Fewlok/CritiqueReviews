import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const MyBlogs = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs/myBlogs");

  return (
    <div className="blogs-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default MyBlogs;
