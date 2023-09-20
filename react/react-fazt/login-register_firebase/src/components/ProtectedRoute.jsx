//crea rutas protegidas a las cuales solo pueden entran 
//usuarios autenticados

import { useAuth } from "../context/authContext";
//este navigate es un componente
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}){
	const {user, loading} = useAuth();

	if(loading) return <h1>Loading</h1>
	//si user null vamos a login
	if(!user) return <Navigate to="/login" />

	return <>{children}</>
}