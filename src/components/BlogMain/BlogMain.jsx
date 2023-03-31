import React from "react";
import "./BlogMain.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideBar from "../SideBar/SideBar";
import Swal from "sweetalert2";

const BlogMain = () => {
  const [markedBlogs, setMarkBlog] = useState([]);
  const [readingTime, setTime] = useState(0);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleMarkRead = (title, readTime) => {
    let tempArr = [...markedBlogs, title];
    setMarkBlog(tempArr);
    setTime(readingTime + readTime);

    if (markedBlogs.includes(title)) {
      Swal.fire(
        "Hello Dear Reader!",
        "You Have Already Bookmarked This Blog",
        "success"
      );
    }
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
        <h2>Spent time on read: {readingTime}min</h2>
        <h2>Book Marked Blogs :{markedBlogs.length}</h2>
        {markedBlogs.map((aMark) => (
          <SideBar aMark={aMark}></SideBar>
        ))}
      </div>
    </div>
  );
};

export default BlogMain;
