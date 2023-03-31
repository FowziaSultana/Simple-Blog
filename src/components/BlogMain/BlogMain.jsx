import React from "react";
import "./BlogMain.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideBar from "../SideBar/SideBar";
import Swal from "sweetalert2";

const BlogMain = () => {
  const [markedBlogs, setMarkBlog] = useState([]);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleMarkRead = (title) => {
    let tempArr = [...markedBlogs, title];
    setMarkBlog(tempArr);
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div className="container row mx-auto mt-5 ">
      <div className="col-lg-8">
        {blogs.map((aBlog) => (
          <SingleBlog
            aBlog={aBlog}
            key={aBlog.id}
            handleMarkRead={handleMarkRead}
          ></SingleBlog>
        ))}
      </div>
      <div className="col-lg-4">
        <h1>Book Marked Blogs :{markedBlogs.length}</h1>
        {markedBlogs.map((aMark) => (
          <SideBar aMark={aMark}></SideBar>
        ))}
      </div>
    </div>
  );
};

export default BlogMain;
