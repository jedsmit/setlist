import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <nav className="justify-content-end navbar navbar-light bg-light sticky-top">
      <Link className="navbar-brand" to="/">Home</Link>
      <Link className="navbar-brand" to="/setlist">Set List</Link>
      <Link className="navbar-brand" to="/create-setlist">Create Setlist</Link>
    </nav>

  )
}

export default Navbar;