import React from "react";
import "./Bannar.css";

const Bannar = () => {
  return (
    <div>
      <div class="position-relative">
        <div
          class="jumbotron bg-cover text-white"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%),url(https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "440px",
          }}
        ></div>
        <div class="container  bannar-content text-white ">
          <h1 class="fs">Computer Engineering</h1>
          <p class="lead">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
