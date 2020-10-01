import React from "react";
import "./Post.css";
// import Card from "../../components/UI/Card/Card";
import Blogpost from "../../components/BlogPost/Blogpost";
import Sidebar from "../../components/Sidebar/Sidebar";

function Post() {
  return (
    <div className="container">
      <Blogpost />
      <Sidebar />
    </div>
  );
}

export default Post;
