

export const saveGameToStorage = ( newBoard, newTurn ) => {
	//guardamos la partida en el navegador
	window.localStorage.setItem("board", newBoard);
	window.localStorage.setItem("turn", newTurn);
};


export const resetGameStorage = () =>{
	//borramos los datos del navegador
	window.localStorage.removeItem("board");
	window.localStorage.removeItem("turn");
};
