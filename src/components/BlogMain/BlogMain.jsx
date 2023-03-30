import React from "react";
import "./BlogMain.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="main-container container row">
      <div className="col-lg-8">
        {blogs.map((aBlog) => (
          <SingleBlog aBlog={aBlog} key={aBlog.id}></SingleBlog>
        ))}
      </div>
      <div className="col-lg-4">Side BAr</div>
    </div>
  );
};

export default BlogMain;
