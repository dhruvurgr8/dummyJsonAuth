import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../App";
import "./loginform.css";

const LoginForm = () => {
  const [userData, setUserData] = useState({});
  const { token, setToken, isLoading, setIsLoading } = useContext(TokenContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      username: form.username.value,
      password: form.password.value,
    };
    setUserData({ ...formData });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData.username && userData.password) {
          setIsLoading(true); // Set loading state to true when fetching data
          const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: userData.username,
              password: userData.password,
            }),
          });
          if (!response.ok) {
            alert("Invalid credentials Please enter valid details");
          } else {
            const data = await response.json();
            setToken(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("id", data.id);
          }
        }
      } catch (err) {
        console.log("error login failed");
      } finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    };
    fetchData();
  }, [userData, setToken, setIsLoading]);

  return (
    <>
      <h1>Login Form</h1>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleLogin}>
          <label>Enter Username: </label>
          <input type="text" placeholder="Enter Username" name="username" />
          <label>Enter Password:</label>
          <input type="password" name="password" placeholder="Enter Password" />
          <button className="login" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

// This is the final code 4:46
