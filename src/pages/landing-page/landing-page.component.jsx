import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div>
    <h1>Welcome!</h1>
    <Link to="/shop">Get Started</Link>
  </div>
);

export default LandingPage;
