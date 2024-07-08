import {useState} from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    // function countPlusOne() {
    //     return setCount(count+1)
    // }

    const incrementButtonClickHandler = () => {
        setCount(oldCount => oldCount +1);
    }

    const decrementButtonClickHandler = () => {
        setCount(count - 1);
    }

    const resetButtonHandler = (e) => {
        console.log(e);
        setCount(0);
    }
    return (
        <>
        <h2>My Counter</h2>
        <p>{count}</p>
        <button onClick={decrementButtonClickHandler}>-</button>
        <button onClick={resetButtonHandler}>0</button>
        <button onClick={incrementButtonClickHandler}>+</button>
        </>
    );
}