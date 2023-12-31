import React from "react";
import "./BlogMain.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideBar from "../SideBar/SideBar";
import Swal from "sweetalert2";
import BlogQA from "../BlogQA/BlogQA";

const BlogMain = () => {
  const [markedBlogs, setMarkBlog] = useState([]);
  const [readingTime, setTime] = useState(0);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleBookMark = (title, id) => {
    let tempArr = [...markedBlogs, title];
    setMarkBlog(tempArr);
    document.getElementById(id).style.fill = "blueviolet";

    if (markedBlogs.includes(title)) {
      Swal.fire(
        "Hello Reader!",
        "You Have Already Bookmarked This Blog",
        "success"
      );
    }
  };
  const handleMarkRead = (readTime, id) => {
    setTime(readingTime + readTime);
    document.getElementById(id).style.color = "blueviolet";
  };

  return (
    <div className=" container row mx-auto mt-5 ">
      <div className="col-lg-8">
        {blogs.map((aBlog) => (
          <SingleBlog
            aBlog={aBlog}
            key={aBlog.id}
            handleBookMark={handleBookMark}
            handleMarkRead={handleMarkRead}
          ></SingleBlog>
        ))}
        <div className="mt-5 mb-5">
          <h3 className="fw-bold">Assignment Questions</h3>
          <BlogQA></BlogQA>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="sticky">
          <h2 className="spentTime">Spent time on read: {readingTime}min</h2>
          <div className="markedBlogs">
            <h2>Book Marked Blogs :{markedBlogs.length}</h2>
            {markedBlogs.map((aMark) => (
              <SideBar aMark={aMark}></SideBar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
