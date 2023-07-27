import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Index";
import Grapher from "./pages/Grapher";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token
  };

  var token = getToken();
  console.log("token: ", token);
  console.log("!token: ", !token);

  if(!token) {
    return <Login />
  }
  else{
    return (
      <div className="container">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path="/Grapher" element ={<Grapher/>}/>
            <Route path="/Login" element ={<Login/>}/>
            <Route path="/Logout" element ={<Logout/>}/>            
          </Routes>
        </Router>
      </div>
    );
  }
 
}

export default App;