"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = ({ setOpenLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        console.log("invalid credentials");
      } else {
        setOpenLoginModal(false);
        router.replace("/account");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="form-login flex flex-col gap-5 items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="input-container  w-full">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-login border bg-transparent rounded p-3 outline-none  w-full text-white "
          type="text"
        />
        <label>Email</label>
      </div>

      <div className="input-container  w-full">
        <input
          onChange={(e) => setPassword(e.target.value)}
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
