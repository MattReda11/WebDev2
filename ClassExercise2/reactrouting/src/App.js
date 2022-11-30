import Outlet from "./components/Outlet";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn];

  return (
    <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
      {isLoggedIn ? <Outlet /> : <LoginForm />}
    </LoggedInContext.Provider>
  )
}
export default App;

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
});