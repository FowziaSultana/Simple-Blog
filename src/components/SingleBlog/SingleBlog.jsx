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
  const handleBookMark = props.handleBookMark;
  const handleMarkRead = props.handleMarkRead;
  return (
    <div className="card mb-5">
      <img src={blogCoverImages} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img src={authorImages} alt="" className="authorImage" />
            <div>
              <ul className="list-unstyled text-start">
                <li className="authorName">{authorName}</li>
                <li className="text-secondary">{publishDate}</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="text-secondary">
              {readTime} min read{" "}
              <button
                className="btn"
                onClick={() => {
                  handleBookMark(blogTitle);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={15}
                  width={20}
                  viewBox="0 0 384 512"
                >
                  <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <h5 className="text-start ">{blogTitle}</h5>

        <p className="text-start">
          <button
            className="btn markRead"
            onClick={() => handleMarkRead(readTime)}
          >
            Mark as read
          </button>
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
