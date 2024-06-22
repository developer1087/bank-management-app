import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="inner-container">
      <Link to="usersPage">
        <button>Watch Users</button>
      </Link>
      <Link to="actionsPage">
        <button>Perform Actions</button>
      </Link>
    </main>
  );
};

export default HomePage;
