import React from "react";
import TeamMember from "./TeamMember"; // Import the TeamMember component
import "./style/TeamPage.css"; // Import the CSS file for TeamPage
import Navbar from "./Navbar";

const Team = () => {
  return (
    <div className="team">
      <Navbar />
      <div class="responsive-container-block outer-container">
        <div class="responsive-container-block inner-container">
          <p class="text-blk section-head-text"> Meet Our Team</p>
          <div className="responsive-container-block">
            <TeamMember
              name="Ishan Vadhan"
              photoUrl="Ishaan.jpg"
              role="Backend Developer"
            />
            <TeamMember
              name="Sampada Kothari"
              photoUrl="sampada.jpeg"
              role="Backend Developer"
            />
            <TeamMember
              name="Ravindra Kadam"
              photoUrl="ravindra.jpg"
              role="Frontend Developer"
            />
            <TeamMember
              name="Srushti Kakade"
              photoUrl="srushti.jpg"
              role="Frontend Developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
