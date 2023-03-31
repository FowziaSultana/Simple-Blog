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
  const handleMarkRead = props.handleMarkRead;
  return (
    <div className="card mb-3s">
      {/* <img src={blogCoverImages} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title text-start">{blogTitle}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <button
            className="btn btn-info"
            onClick={() => handleMarkRead(blogTitle)}
          >
            Mark as red
          </button>
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
