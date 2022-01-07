import { useState } from "react";
import server from "../axios";

const Login = ({ setPageState }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //   useEffect(() => {
  //     async function checkAuth() {
  //       const accessToken = localStorage.getItem("accessToken");
  //       try {
  //         await server.post("/auth/authenticate", { accessToken });
  //       } catch (err) {
  //         const refreshToken = localStorage.getItem("refreshToken");
  //         try {
  //           await server.post("/auth/token", { refreshToken });
  //           alert("Already logged in");
  //         } catch (err) {
  //           alert("invalid user");
  //         }
  //       }
  //     }
  //     checkAuth();
  //   }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const auth = await server.post("/auth/login", formData);
      localStorage.setItem("accessToken", auth.data.accessToken);
      localStorage.setItem("refreshToken", auth.data.refreshToken);
      alert("Logged in successfully");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
      <h1 className="font-bold text-4xl text-center">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          className="input-text"
          type="text"
          placeholder="Enter e-mail"
          name="email"
          onChange={handleChange}
        />
        <input
          className="input-text"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <button className="btn-primary" type="submit" onClick={login}>
          Login
        </button>
        <button className="text-xs hover:text-blue-500 text-right underline">
          Forgot password?
        </button>
        <small className="text-center pt-5">
          Don't have an account?
          <button
            className="text-blue-500 ml-2"
            onClick={() => setPageState("signup")}
          >
            Sign up
          </button>
        </small>
      </form>
    </div>
  );
};

export default Login;
