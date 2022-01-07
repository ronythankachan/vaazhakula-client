import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [pageState, setPageState] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen flex justify-center md:items-center">
      {!loggedIn && pageState === "login" ? (
        <Login setPageState={setPageState} setLoggedIn={setLoggedIn} />
      ) : (
        <Signup setPageState={setPageState} />
      )}
    </div>
  );
};

export default AuthPage;
