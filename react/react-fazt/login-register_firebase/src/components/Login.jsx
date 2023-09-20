import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //del target tomamos el name y el value
  const handleChange = ({ target: { name, value } }) => {
    //guardamos los valores anteriores y luego actualizamos el input que ha cambiado
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //signup es asincrona paor eso el await
      await login(user.email, user.password);
      //vamos a la ruta inicial (home)
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") setError("Invalid email");
      if (error.code === "auth/user-not-found") setError("User no exist");
      if (error.code === "auth/wrong-password")
        setError("Wrong password try again");
      if (error.code === "auth/internal-error") setError("Write a password");

      console.log(error.code);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async()=>{
    if(!user.email) return setError('Please enter your email');
    
    try {
      await resetPassword(user.email);
      setError('we send you an email with a link to reset your password')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="youremail@company.ltd"
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:drop-shadow-xl"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:drop-shadow-xl"
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:drop-shadow-xl ">
            Login
          </button>

          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot password?
          </a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-evenly px-3">
        don't have an Account? <Link to="/register"> Register </Link>
      </p>

      <button
        onClick={handleGoogleSignIn}
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Login with google
      </button>
    </div>
  );
}
