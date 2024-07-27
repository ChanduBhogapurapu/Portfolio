import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>Experience <span>&</span> Education</p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Certified Training on Django</p>
          <p>Topnotch Software Solutions</p>
          <p>
            <span>July 10th - August 8th 2023</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelor of Technology - Information Technology</p>
          <p>GMR Institute of Technology</p>
          <p>
            <span>2021 - 2025</span>
            <a href="/">
              <LocationOnIcon />
              Vizianagaram, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Board of Intermediate Education</p>
          <p>Narayana Junior College</p>
          <p>
            <span>2021</span>
            <a href="/">
              <LocationOnIcon />
              Vizianagaram, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Secondary School of Education</p>
          <p>Sri Chaitanya Techno School</p>
          <p>
            <span>2019</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;