import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <React.Fragment>
      <div>Not Found</div>
      <Link to="/" className="not">
        Return Home
      </Link>
    </React.Fragment>
  );
}
