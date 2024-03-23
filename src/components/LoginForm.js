import { useContext, useEffect, useState } from "react";
import "./loginform.css";
import { TokenContext } from "../App";
const LoginForm = () => {
  const [userData, setUserData] = useState({});
  const { token, setToken } = useContext(TokenContext);
  //   const [data, setData] = useState("");
  // LOGIN DETAILS:
  // username: "kminchelle",
  //         password: "0lelplR",
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      username: form.username.value,
      password: form.password.value,
    };
    setUserData({ ...formData });
    console.log(formData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData.username && userData.password) {
          const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: userData.username,
              password: userData.password,
              // expiresInMins: 60, // optional
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

          //   setData(response);
        }
      } catch (err) {
        console.log("error login failed");
      }
    };
    fetchData();
  }, [userData]);
  return (
    <>
      <h1>Login Form</h1>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleLogin}>
          <label>Enter Username: </label>
          <input type="text" placeholder="Enter Username" name="username" />

          <label>Enter Password:</label>
          <input type="password" name="password" placeholder="Enter Password" />
          <button className="login">Login</button>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
