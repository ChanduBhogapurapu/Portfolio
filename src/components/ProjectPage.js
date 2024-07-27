import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>Pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Project 1</p>
          <p>Invoice Generator using React</p>
          <p>
            <span>It allows users to create, customize, and manage professional invoices easily. It provides a
            user-friendly interface for generating PDF invoices quickly.</span>
            <a href="https://github.com/ChanduBhogapurapu/Invoice-Generator-using-React.git">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Project 2</p>
          <p>YouTube Transcript Summarizer</p>
          <p>
            <span>Provides users with concise summaries of video content, making it easier to grasp key
            points without watching the entire video.</span>
            <a href="https://github.com/ChanduBhogapurapu/Youtube-Transcript-Summarizer.git">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Project 3</p>
          <p>Chat Application using Angular JS</p>
          <p>
            <span>This project enables real-time messaging, seamless communication with a responsive interface. It leverages AngularJS for dynamic content updates.</span>
            <a href="https://github.com/ChanduBhogapurapu/Chat-Application-using-Angular.git">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;