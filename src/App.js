import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const loginUser = async (userCredentials) => {
    const response = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      toast.error("Invalid credentials");
      setLoggedIn(false);
    } else {
      const data = await response.json();
      toast.success("Login success");
      setLoggedIn(true);
      const getUsers = await fetch(`https://reqres.in/api/unknown`, {
        method: "GET",
        headers: {
          Authentication: data.token,
          "Content-type": "application/json",
        },
      });
      const usersData = await getUsers.json();
      setUsers(usersData);
    }
  };

  return (
    <div className="App">
      <Toaster />
      {!loggedIn ? (
        <LoginForm loginCredentials={loginUser} />
      ) : (
        <Users users={users} />
      )}
    </div>
  );
}

export default App;

//   const apiResponse = await axios.post(
//     `https://reqres.in/api/login`,
//     userCredentials
//   );
//   console.log(apiResponse);
