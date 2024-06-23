import React, { useContext } from "react";
import { UsersContext } from "../../context/usersContext";
import SingleUser from "../../components/SingleUser/SingleUser";

import "./UsersPage.css";

const UsersPage = () => {
  const { usersData } = useContext(UsersContext);
  return (
    <div className="users-container">
      {usersData.map((user) => {
        return <SingleUser key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersPage;
