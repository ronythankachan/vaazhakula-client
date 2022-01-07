import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [pageState, setPageState] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen flex justify-center md:items-center">
      {pageState === "login" ? (
        <Login setPageState={setPageState} />
      ) : (
        <Signup setPageState={setPageState} />
      )}
    </div>
  );
};

export default AuthPage;
