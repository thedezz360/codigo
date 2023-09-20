
function getSuspender(promise){
	let status = "pending";
	let response;

	//manejamos la promesa
	const suspender = promise.then(
		(res) => {
			status = "success";
			response = res;
		},
		(err) => {
			status = "error";
			response = err;
		}
	);

	//read es quien tendra los datos
	const read = () => {
		switch(status){
			case "pending":
				throw suspender;
			case "error":
				throw response;
			default:
				return response;
		}
	}

	//devolvemos la funcion read
	return {read};
}


export default function fetchData(url) {
	//encapsulamos la promesa de fetch en promise
	const promise = fetch(url)
		.then((response)=>response.json())
		.then((data)=> data);

		//getSuspender manejara la promesa
	return getSuspender(promise);
}