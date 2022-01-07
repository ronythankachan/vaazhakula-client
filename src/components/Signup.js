const Signup = ({ setPageState }) => {
  const signup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
      <h1 className="font-bold text-4xl text-center">Sign up</h1>
      <form className="flex flex-col space-y-4">
        <input className="input-text" type="text" placeholder="Full Name" />
        <input className="input-text" type="email" placeholder="E-mail" />
        <div className="flex items-center space-x-2 ">
          <div className="text-gray-400 border p-3 rounded-md bg-gray-100">
            +91
          </div>
          <input
            className="input-text w-full"
            type="number"
            placeholder="Phone number"
          />
        </div>

        <input
          className="input-text"
          type="password"
          placeholder="Enter a password"
        />
        <input
          className="input-text"
          type="password"
          placeholder="Confirm password"
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
