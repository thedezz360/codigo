/* eslint-disable react/prop-types */
import React from "react";
import Square from "./Square";


function WinnerModal({ winner , resetGame}) {
	if (winner === null) return null;

	const winnerText = (winner === false) ? "Empate" : "Ganó";

	return (
		<section className="winner">
			<div className="text">
				<h2>{winnerText}</h2>

				<header className="win">{winner && <Square>{winner}</Square>}</header>

				<footer>
					<button onClick={resetGame}>Volver a jugar</button>
				</footer>
			</div>
		</section>
	);
}

export default WinnerModal;
