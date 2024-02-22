import React from "react";
import Navbar from "./Navbar";

const Sponsor = () => {
  return (
    <>
      <Navbar />
      <div>
        <section>
          <div class="slider-area">
            <h2>Our Sponsors</h2>
          </div>
          <a
            href="https://www.facebook.com/coreprogrammingacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card-holder">
              <img src="/core code.jpeg" alt="Image 1" />
              <h3>Core Code Programming Academy</h3>
            </div>
          </a>
          <a
            href="https://www.facebook.com/coreprogrammingacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card-holder">
              <img src="/posit.jpeg" alt="Image 2" />
              <h3>Posit Source</h3>
            </div>
          </a>
          <a
            href="https://www.facebook.com/coreprogrammingacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card-holder">
              <img src="/sana cyber.png" alt="Image 3" />
              <h3>Sana Cyber Forensic</h3>
            </div>
          </a>
          <a
            href="https://www.facebook.com/coreprogrammingacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="card-holder">
              <img src="/frullato.jpeg" alt="Image 4" />
              <h3>Frullato Thick Shakes</h3>
            </div>
          </a>
          <a href="https://abcz.in" target="_blank" rel="noopener noreferrer">
            <div class="card-holder">
              <img src="/abcz.jpeg" alt="Image 4" />
              <h3>ABC'Z from fundamentals to the Zenith</h3>
            </div>
          </a>
        </section>
      </div>
    </>
  );
};

export default Sponsor;
