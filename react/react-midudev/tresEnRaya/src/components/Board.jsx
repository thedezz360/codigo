/* eslint-disable react/prop-types */
import React from "react";
import Square from "./Square";
import { updateBoard } from "../logic/board";



export function Board({board,  turn, winner, setBoard, setWinner,setTurn}) {
	return (
		<section className="game">
			{board.map((cell, index) => {
				return (
					<Square
						index={index}
						key={index}
						updateBoard={() =>
							updateBoard(
								index,
								board,
								turn,
								winner,
								setBoard,
								setWinner,
								setTurn
							)
						}
					>
						{cell}
					</Square>
				);
			})}
		</section>
	);
}
