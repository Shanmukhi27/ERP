import React from "react";
import Nav from  '../Nav';
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import Axios from "axios";
import CDC from "./CDC";
import InternJob from "./InternJob";
import FacultyHome from "./FacultyHome";
import Job from "./Job";

function FacultyLogin(props){

      
  const navigate= useNavigate();

    function handleSubmit(event){
        event.preventDefault();
    //     const email=document.getElementById('email').value;
    // const password=document.getElementById('password').value;
    // Axios.post("http://localhost:4500/checkFaculty",{
    //   Email:email,
    //   Password:password
    // }).then(res=>{
    //   console.log(res.data);
    //   if(res.data==="exists"){
    //      navigate("/CDC");
    //   }else{
    //     alert(res.data);
    //   }
    // })
    console.log(props.from)
    if(props.from==="Joblist"){
         navigate("/Faculty/Job");
    }else{
      navigate("/Faculty/FacultyHome");
    }
       
    }
   return <div>
        
         <div>
      <label for="clgmail">College EmailID:</label>
      <input id='email' type="email"  placeholder="Enter Email" />
      </div>
      <div>
      <label for="Password">Password:</label>
      <input id='password' type="password" placeholder="Enter Password" />
      </div>
       <button onClick={handleSubmit} type="submit">Login</button>

       <Routes>
        <Route path="/Faculty/FacultyHome" element={<FacultyHome />}></Route>
        <Route path="/Faculty/Job" element={<Job />}></Route>
      </Routes>
    </div>
}

export default FacultyLogin;