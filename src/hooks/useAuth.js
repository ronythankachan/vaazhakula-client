import { useEffect, useState } from "react";
import server from "../axios";

const useAuth = async () => {
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  useEffect(() => {
    async function checkAuth() {
      try {
        const auth = await server.post("/auth/authorize", {
          accessToken,
          refreshToken,
        });
        console.log("Auth is", auth.data);
        setUser(await auth.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
    checkAuth();
  }, [accessToken, refreshToken]);

  return user;
};

export default useAuth;
