import { useState, useContext } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { UsersContext, AppProvider } from "./context/usersContext";
import UsersPage from "./pages/UsersPage/UsersPage";
import ActionsPage from "./pages/ActionsPage/ActionsPage";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(UsersContext);

  return isLoggedIn ? <HomePage /> : <LoginPage />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
      },
      { path: "usersPage", element: <UsersPage /> },
      { path: "actionsPage", element: <ActionsPage /> },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
