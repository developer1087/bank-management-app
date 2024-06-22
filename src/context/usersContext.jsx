import { useState, createContext, useEffect } from "react";
import { getUsers } from "../Api/api";
import axios from "axios";

const UsersContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setUsersData(await getUsers());
    }
    fetchData();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        usersData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, AppProvider };
