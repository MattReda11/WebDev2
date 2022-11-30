import React from "react";
import DbData from "../components/DbData";
import DisplayMessage from "../components/DisplayMessage"
import Clock from "../components/Clock";
import UserActions from "../components/UserActions";
import CounterDisplay from "../components/CounterDisplay";

function Home() {
    const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
    React.useEffect(() => {
        sessionStorage.setItem('color', JSON.stringify(color));
        localStorage.setItem('count', JSON.stringify(count));
    }, [color, count]);
    return (
        <div>
            <div>
                <DisplayMessage color={color} />
            </div>
            <div>
                <Clock />
            </div>
            <div>
                <CounterDisplay count={count} />
            </div>
            <div>
                <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
            </div><br />
            <div>
                <DbData />
            </div>
        </div>
    )

}
export default Home;