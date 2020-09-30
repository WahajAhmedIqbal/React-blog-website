import React from "react";
import "./Post.css";
// import Card from "../../components/UI/Card/Card";
import Blogpost from "../../components/BlogPost/Blogpost";

function Post() {
  return (
    <div className="container">
      <Blogpost />
      <div className="sidebar">Side bar</div>
    </div>
  );
}

export default Post;
