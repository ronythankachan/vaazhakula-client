const Login = ({ setPageState }) => {
  const login = () => {};
  return (
    <div className="w-96 h-96 bg-white shadow-md rounded-md p-6 space-y-10 m-2">
      <h1 className="font-bold text-4xl text-center">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          className="border rounded-md ring-0 p-2"
          type="text"
          placeholder="Enter e-mail"
        />
        <input
          className="border rounded-md ring-0 p-2"
          type="text"
          placeholder="Enter password"
        />
        <button
          className="bg-none font-semibold ring-2 py-3 ring-black ring-offset-2 bg-gray-300  hover:scale-[102%] transition-all duration-150 ease-out"
          type="submit"
          onClick={login}
        >
          Login
        </button>
        <small className="text-center pt-5">
          Don't have an account?
          <button
            className="text-blue-500 ml-3"
            onClick={() => setPageState("signup")}
          >
            Sign up{" "}
          </button>
        </small>
      </form>
    </div>
  );
};

export default Login;
