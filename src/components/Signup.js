import { useState } from "react";
import server from "../axios";

const Signup = ({ setPageState }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const signup = async (e) => {
    e.preventDefault();
    try {
      delete formData.cpassword;
      console.log(formData);
      const result = await server.post("/auth/signup", formData);
      alert(result.data.message);
      setPageState("login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
      <h1 className="font-bold text-4xl text-center">Sign up</h1>
      <form className="flex flex-col space-y-4">
        <input
          className="input-text"
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="input-text"
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
        />
        <div className="flex items-center space-x-2 ">
          <div className="text-gray-400 border p-3 rounded-md bg-gray-100">
            +91
          </div>
          <input
            className="input-text w-full"
            type="number"
            placeholder="Phone number"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <input
          className="input-text"
          type="password"
          placeholder="Enter a password"
          name="password"
          onChange={handleChange}
        />
        <input
          className="input-text"
          type="password"
          placeholder="Confirm password"
          name="cpassword"
          onChange={handleChange}
        />
        <button className="btn-primary" type="submit" onClick={signup}>
          Sign up
        </button>
        <small className="text-center pt-5">
          Already have an account?
          <button
            className="text-blue-500 ml-3"
            onClick={() => setPageState("login")}
          >
            Login
          </button>
        </small>
      </form>
    </div>
  );
};

export default Signup;
