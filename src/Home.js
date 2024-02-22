import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Team from "./Team";
import AboutUs from "./About";
import Sponsor from "./Sponsor";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    // localStorage.removeItem("bugSec");
    // localStorage.removeItem("bugTimer");
    // localStorage.removeItem("solSec");
    // localStorage.removeItem("solTimer");
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="content">
                    <h1 className="homeTitle">Bug Battle</h1>
                    <p className="homePar">Hello! We are pleased to have you here! Codefiesta is one of the most exciting and adventurous event organized by Computer Department. This year, we are maintaining this legacy to entertain the participants in the most efficient and unique way.
                    Let's begin this 2k24 with a kick start! Let your code speak...
                    </p>
                    
                    <p className="homePar">Bug Battle is a coding challenge that will assess your programming proficiency using a unique approach.  In this challenge, participants will be required to analyzed and understand the code and create bugs for the opponent.
                    This means they will need to rely solely on their memory and knowledge of programming syntax to complete the challenge and then solve the bugs created by other team in other half</p>
                    <button className="homeBtn" >Get Started</button>
                </div>
      <Footer/>     
    </div>
  );
};

export default Home;
