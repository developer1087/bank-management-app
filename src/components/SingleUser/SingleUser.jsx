import React from "react";

import "./SingleUser.css";

const SingleUser = ({ user }) => {
  return (
    <div className="single-user-container">
      <p>{user.fname}</p>
      <p>{user.lname}</p>
    </div>
  );
};

export default SingleUser;
