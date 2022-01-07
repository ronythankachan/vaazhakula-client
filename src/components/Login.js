const Login = ({ setPageState }) => {
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
      <h1 className="font-bold text-4xl text-center">Login</h1>
      <form className="flex flex-col space-y-4">
        <input className="input-text" type="text" placeholder="Enter e-mail" />
        <input
          className="input-text"
          type="password"
          placeholder="Enter password"
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
