/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import { TURNS } from "./constants";
import WinnerModal from "./components/WinnerModal";
import { Board } from "./components/Board";
import { resetGame } from "./logic/board";



function App() {
	

	const [board, setBoard] = useState(()=>{
		
		const boardFromStorage = window.localStorage.getItem("board");
		return (
			boardFromStorage 
				? JSON.parse(boardFromStorage)
				: Array(9).fill(null)
		);
	});

	const [turn, setTurn] = useState(()=>{
		const turnFromStorage = window.localStorage.getItem("turn");
		return turnFromStorage ?? TURNS.x;
	});

	//null -> no hay ganador
	//false -> hay empate
	const [winner, setWinner] = useState(null);


	
	

	return (
		<main className="board">
			<h1>tic tac toe</h1>
			<button onClick={()=>resetGame(setBoard,setTurn, setWinner)}>Reiniciar partida</button>
			
			<Board board={board} turn={turn} winner={winner} setBoard={setBoard} setWinner={setWinner} setTurn={setTurn} />

			<section className="turn">
				<Square isSelected={turn === TURNS.x}>
					{TURNS.x}
				</Square>
				<Square isSelected={turn === TURNS.o}>
					{TURNS.o}
				</Square>
			</section>

			
			<WinnerModal winner={winner} resetGame={()=>resetGame(setBoard, setTurn, setWinner)} />
			

		</main>
	);
}

export default App;
