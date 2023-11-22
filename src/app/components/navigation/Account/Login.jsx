"use client";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="form-login flex flex-col gap-5 items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="input-container  w-full">
        <input
          className="input-login border bg-transparent rounded p-3 outline-none  w-full text-white "
          type="text"
        />
        <label>Username</label>
      </div>

      <div className="input-container  w-full">
        <input
          className="input-login border bg-transparent  rounded p-3 outline-none w-full text-white "
          type="password"
        />
        <label>Password</label>
      </div>

      <button
        className="p-3 rounded self-start w-1/2 border hover-btn  transition-all 200 ease-in-out"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
