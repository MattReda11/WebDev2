import React, { useState, useEffect } from "react";
import DisplayMessage from './DisplayMessage';
import Clock from './Clock';
import CounterDisplay from './CounterDisplay';
import UserActions from './UserActions';
import Header from "./Header";

function Main() {
    const [color, setColor] = useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);

    useEffect(() => {
        sessionStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('count', JSON.stringify(count));
    }, [color, count]);

    return (<div>
        <Header />
        <DisplayMessage color={color} />
        <Clock />
        <CounterDisplay count={count} />
        <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
    </div>
    );
}
export default Main;