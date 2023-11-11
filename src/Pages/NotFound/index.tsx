import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="notFound">
      <Link to="/">
        <h3>Not Found 404</h3>
      </Link>
    </div>
  );
};

export default NotFound;
