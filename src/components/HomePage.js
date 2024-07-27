import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>Hey,</span>
          <p>
            This is<span> Chandu</span>,
          </p>
        </div>
        <span>a Web developer.</span>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/ChanduBhogapurapu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/chandu-bhogapurapu-721652248"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="https://x.com/Bhog1218?t=ii6-lzkTMnOJp7nBdI9_Kg&s=08">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;