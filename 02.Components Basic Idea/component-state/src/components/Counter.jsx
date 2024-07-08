import {useState} from "react";
import KillCounter from "./KillCounter";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        setCount(oldCount => oldCount +1);
    }

    const decrementButtonClickHandler = () => {
        setCount(count - 1);
    }

    const resetButtonHandler = (e) => {
        setCount(0);
    }

    let countText = `Positive ${count}`;
    let color = "green";
    // let counterClassName = "positive-number"
    if(count < 0) {
        countText = `Negative ${count}`;
        color = "red";
        // counterClassName = "negative-nuber"
    } 

    const enableIncrement = count < 10;

    return (
        <>
        <h2>My Counter</h2>

        <KillCounter count={count} />

        <p
            style={{color}}
            className={count < 0 ? "negative-number" : "positive-number"}
        >
            {countText}
        </p>

        <button onClick={decrementButtonClickHandler} >-</button>
        <button onClick={resetButtonHandler}>0</button>
        {enableIncrement && <button onClick={incrementButtonClickHandler}>+</button>}
        </>
    );
}