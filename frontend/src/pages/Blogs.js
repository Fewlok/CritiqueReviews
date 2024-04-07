import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Blogs = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="blogs-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Blogs;
