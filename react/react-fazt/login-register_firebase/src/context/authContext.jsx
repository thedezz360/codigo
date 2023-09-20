import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
	GoogleAuthProvider, //para logear con google
	signInWithPopup, // pop up para logear con google
  sendPasswordResetEmail // para reestablecer la contraseña
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

//creamos un hook para pasar el valor del contexto
//de esta manera exportamos el contexto
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

//createUserWithEmailAndPassword y signInWithEmailAndPassword devuelven un userCredential
export function AuthProvider({ children }) {

  useEffect(() => {
    //se ejecuta cuando se logea o deslogea un usuario
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

  }, []);

  //donde guardaremos los valores del user
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //registramos un usuario en firebase
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //logeamos el usuario
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    signOut(auth);
  };

	//para logear con google
	const loginWithGoogle = ()=>{
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth,googleProvider);
	}

  const resetPassword = (email) =>
    sendPasswordResetEmail(auth,email);
  


  //en value iran los valores que pasaremos por context
  return (
    <authContext.Provider value={{ signup, login, user, logOut, loading, loginWithGoogle, resetPassword }}>
      {children}
    </authContext.Provider>
  );
}
