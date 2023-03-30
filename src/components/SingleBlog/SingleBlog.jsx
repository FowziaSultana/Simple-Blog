import React from "react";
import "./SingleBlog.css";

const SingleBlog = (props) => {
  let {
    id,
    authorName,
    blogTitle,
    blogCoverImages,
    authorImages,
    readTime,
    publishDate,
  } = props.aBlog;
  return (
    <div>
      <img src={authorImages}></img>
    </div>
  );
};

export default SingleBlog;
