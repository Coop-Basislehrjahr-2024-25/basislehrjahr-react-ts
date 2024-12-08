import React, {useState} from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)
    return <div className="d-flex flex-column align-items-center">
        <div>
            <button className="btn m-1" onClick={add}>+</button>
            <button className="btn m-1" onClick={subtract}>-</button>
        </div>
    </div>

    function add() {
        setCounter(counter + 1)
    }

    function subtract() {
        setCounter(counter - 1)
    }
}