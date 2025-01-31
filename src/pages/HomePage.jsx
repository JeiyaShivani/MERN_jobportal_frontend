import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        <h1 className="main">
        YOUR TRUSTED HUB<br />
        FOR CAREGIVERS &<br />
        PET LOVERS
        </h1>
        <p>
        Finding compassionate hands for those who need them the most—because every pet and every elder deserves the best care.
        </p>
        <div className="buttons">
          <Link to="/loginSignup">
            <button className="about-btn">Browse Jobs</button>
          </Link>
          <Link to="/loginSignup">
            <button className="quote-btn">Post a Job</button>
          </Link>
        </div>
      </div>
      <div className="homepage-right">
        <img src={image1} alt="searchhing job" />
      </div>
    </div>
  );
};

export default HomePage;
