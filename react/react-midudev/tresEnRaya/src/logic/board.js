import { WINNER_COMBOS, TURNS } from "../constants";
import confetti from "canvas-confetti";
import { resetGameStorage, saveGameToStorage } from "./storage";


export const checkEndGame = (boardToCheck) =>{
	//revisamos si hay empate
	// si no tenemos espacios vacíos en el tablero
	return boardToCheck.every(square => square !== null);
};

//revisamos todas las combinaciones ganadoras
//para ver si x u o ha ganado
//null -> no hay ganador
//false -> hay empate
export const checkWinner = (boardToCheck) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] && //check si tenemos un valor
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			//devolvemos el ganador x u o
			return boardToCheck[a];
		}
	}
	//si no tenemos ganador
	return null;
};

export const updateBoard = (index, board, turn, winner, setBoard,setWinner, setTurn) =>{
	//no actializamos la posicion 
	//si ya tenemos algo, o tenemos un ganador
	if(board[index] || winner) return;
	
	//actualizamos el board
	const newBoard = [...board];
	newBoard[index] = turn;
	setBoard(newBoard);

	//

	//check si tenemos ganador
	const newWinner = checkWinner(newBoard);
	if(newWinner){
		//lanzamos confetti
		confetti();
		
		setWinner(newWinner);
		return;
		
		// check si el juego a terminado, por falta de celdas vacias
	}else if (checkEndGame(newBoard)){
		setWinner(false); //empate
	}

	//cambiamos el turno
	const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x ;
	setTurn(newTurn);
	
	console.log(newBoard);
	console.log(newTurn);

	saveGameToStorage(JSON.stringify(newBoard), newTurn);

	
};

export function resetGame (setBoard, setTurn, setWinner){
	setBoard(Array(9).fill(null));
	setTurn(TURNS.x);
	setWinner(null);

	//borramos los datos del navegador
	resetGameStorage();
}


