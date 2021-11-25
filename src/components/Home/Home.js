import React from "react";
import "./Home.css";
import Data from "../../master.json";
const Home = () => {
  return (
    <section className="wrapper">
      <div className="home-content">
        <div className="home-heading">
          <h1>{Data["firstname"]}</h1>
          <p>{Data["about"].desc}</p>
          <div className="home-social-links">
            <a href={Data["social_links"].github}>
              <i class="fab fa-github"></i>
            </a>
            <a href={Data["social_links"].linkedin}>
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home-img-container">
        <img src='/images/mainimg.jpg' alt="homeimg" width="100%" />
      </div>
    </section>
  );
};

export default Home;
