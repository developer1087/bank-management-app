import React from "react";

import "./SingleUser.css";

const SingleUser = ({ user }) => {
  return (
    <div className="single-user-container">
      <p>{user.fname}</p>
      <p>{user.lname}</p>
      <p>{user.passportId}</p>
      <p>{user.cash}</p>
      <p>{user.credit}</p>
      <button>Deposit</button>
      <button>Withdraw</button>
      <button>Transfer</button>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
};

export default SingleUser;
