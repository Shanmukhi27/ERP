import React from "react";
import { useLocation } from "react-router-dom";

function Ip(){
    const location=useLocation();
  console.log(location.pathname);  
  return <h1>Hello!!</h1>
}

export default Ip;