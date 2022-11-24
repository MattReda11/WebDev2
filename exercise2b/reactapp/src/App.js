
import React from "react";

// Earlier Code -> Code from first examples

function App() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
  React.useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);
  return (<div>
    <DisplayMessage color={color} />
    <Clock />
    <p>{count}</p>
    <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
  </div>
  );
}
function toggle(color) {
  if (color === "blue") {
    return "red";
  } else {
    return "blue";
  }
}
function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React World</h1>;
}

function Clock() {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString());
  React.useEffect(() => {
    const interval = setInterval(() =>
      setTime(new Date().toLocaleTimeString()), 3000);
    return () => { clearInterval(interval); }
  }, [time]);
  return <p>React Clock: {time} </p>
}

function UserActions(props) {
  return <button onClick={() => {
    props.setColor(toggle(props.color));
    props.setCount(props.count + 1)
  }}>
    Click me React
  </button>
}

export default App;