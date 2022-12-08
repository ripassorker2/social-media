import React from "react";
import Posts from "../Posts/Posts";
import "./PostManu.css";

const PostManu = () => {
  return (
    <div className="post-manu">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse d-flex justify-content-between navbar-collapse">
          <ul class="navbar-nav fs-6 mr-auto">
            <li class="nav-item">
              <a class="nav-link " href=".">
                All Posts (32)
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                Article
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                Job
              </a>
            </li>
          </ul>
          <div>
            <button className="write-post">Write a post </button>
            <button className="btn btn-primary">Join Group</button>
          </div>
        </div>
      </nav>
      <hr className="fw-bold" />
      <Posts />
    </div>
  );
};

export default PostManu;
