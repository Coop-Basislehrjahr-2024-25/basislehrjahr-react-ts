import React from "react";

export function Counter() {
	return <div className="d-flex flex-column align-items-center">
		<p>0</p>
		<div>
			<button className="btn m-1" onClick={add}>+</button>
			<button className="btn m-1" onClick={subtract}>-</button>
		</div>
	</div>

	function add() {
		// implement counter increase
	}

	function subtract() {
		// implement counter decrease
	}
}