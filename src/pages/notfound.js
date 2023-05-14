import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <div>
    <h1>Page Not Found 404</h1>
    <Link to={'/'}>GO HOME</Link>
  </div>;
};

export default NotFound;
