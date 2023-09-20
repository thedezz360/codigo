import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [controller, setController] = useState(null);

  //se ejecuta cuando se monta el componente
  useEffect(() => {
		//para cancelar la peticion
		const abortController = new AbortController();
		setController(abortController);
		
		setLoading(true);

		fetch(url,{signal:abortController.signal})
      .then((response) => response.json())
      .then((response) => setData(response))
			.catch((error)=>{
				if(error.name === "AbortError"){
					console.log("request cancelled")
				}else{
					setError(error);
				}
			})
			.finally(() => setLoading(false));
		//se ejecuta cuando se desmonta el camponente
		return () => abortController.abort();
  }, []);

	const handleCancelRequest = () => {
		if(controller){
			controller.abort()
			setError("Request cancelled")
		}
	}
	
	return {data, loading, error, handleCancelRequest};
}


