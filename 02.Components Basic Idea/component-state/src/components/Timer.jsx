import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(oldTime => oldTime + 1);
    }, 1000);
   
    return (
       <>
       <h2>My Timer</h2>

       <p>{time}</p>
       </>
    );
}