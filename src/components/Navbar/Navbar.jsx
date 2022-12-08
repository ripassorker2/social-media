import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <nav class="navbar navbar-expand-lg navbar-light bg-bg-dark ">
        <div class="container-fluid">
          <h2 class="navbar-brand fs-3">
            <span className="text-success">ATG</span>W
            <span className="text-success">O</span>RLD
          </h2>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav  "></div>
            <form class="d-flex nav-input">
              <div class="input-group  w-100">
                <input
                  type="text"
                  class="form-control rounded-5 "
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
            </form>
            <div class="navbar-nav">
              <a href="/" class="nav-item nav-link fw-bold">
                Create Account. <span className="text-primary">It's free!</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
