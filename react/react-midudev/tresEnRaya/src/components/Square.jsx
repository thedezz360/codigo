/* eslint-disable react/prop-types */
import React from "react";

function Square({ children, updateBoard, index, isSelected }) {
	const className = `square ${isSelected ? "is-selected" : ""}`;

	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div onClick={handleClick} className={className}>
			{children}
		</div>
	);
}

export default Square;
