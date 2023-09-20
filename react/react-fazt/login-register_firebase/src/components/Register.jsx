import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate,Link } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
	
  const { signup } = useAuth();
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
      await signup(user.email, user.password);
      //vamos a la ruta inicial (home)
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") setError("Invalid Email");
      if (error.code === "auth/weak-password")
        setError("Invalid password, at last 6 characters");
      if (error.code === "auth/email-already-in-use")
        setError("Email is already in use");
      console.log(error.code);
    }
  };

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


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:drop-shadow-xl ">
          Register
        </button>
      </form>
        <p className="my-4 text-sm flex justify-evenly px-3">Already have an Account? <Link to='/login'> Login </Link></p>
    </div>
  );
}
