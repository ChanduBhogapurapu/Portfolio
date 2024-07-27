import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        Ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          Creating elegant and straight forward web solutions with front-end tools excites me.
        </div>
        <div className="about-right">
          <p>
            I'm Chandu Bhogapurapu. I am an <span>aspiring web developer</span>. I have
            done Under Graduate Diploma in Information Technology from{" "}
            <span>GMR Institute of Technology</span>, Rajam, Andhra Pradesh.
          </p>
          <p>
            I specialize in efficient <span>React</span> apps and
            <span> CSS</span> & <span>HTML</span> & <span>Python</span> that just work across all
            platforms and browsers. I care deeply about building user-friendly and accessible interfaces for everyone
          </p>
          <p>
            At the moment, I'm passionate about designing more innovative
            <span> front-end web pages</span> and working towards a career as a <span>Product Designer</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;