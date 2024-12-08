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
        //implement state
        throw new Error("state change not implemented");
    }

    function subtract() {
        //implement state
        throw new Error("state change not implemented");
    }
}