import { createContext, useState } from "react";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/profilePage";

export const TokenContext = createContext();
function App() {
  const [token, setToken] = useState("");
  const localToken = localStorage.getItem("token");
  const handleClick = () => {
    console.log("token cleared");
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <>
      <TokenContext.Provider value={{ token, setToken }}>
        {!localToken && <LoginForm />}
        {localToken && <ProfilePage />}
      </TokenContext.Provider>
      <button onClick={handleClick}>ClearToken</button>
    </>
  );
}

export default App;
//   const [data, setData] = useState("");
// LOGIN DETAILS:
// username: "kminchelle",
//         password: "0lelplR",
