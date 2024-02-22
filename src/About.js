import React from 'react';
import './style/AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
    <div className="about-us-container">
      <div className="left-content">
        <h1>About Us</h1>
        <p>
          Bug Battle is an exhilarating coding competition where two teams engage in a battle of wits and bugs.
          Participants immerse themselves in lines of code, strategically planting tricky bugs to stump their opponents.
          As teams exchange and decipher each other's code, they race against the clock to debug and emerge victorious.
          It's an adrenaline-pumping challenge that puts coding skills and problem-solving abilities to the test.
          With every keystroke, participants showcase their coding prowess and determination to conquer the intricacies of software engineering.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;