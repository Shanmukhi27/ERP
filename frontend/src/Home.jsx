import React from "react";
import FacultyLogin from "./Faculty/FacultyLogin";
import Register from "./Student/Register";
import {useNavigate,Route,Routes,useLocation} from "react-router-dom";
import InternJob from "./Faculty/InternJob";
import Job from "./Faculty/Job";
import FacultyHome from "./Faculty/FacultyHome";
import Joblist from "./Joblist";
import RegData from "./Faculty/RegData";

function Home(){
     const navigate=useNavigate();
     const location=useLocation();
     function handleFaculty(){
        navigate("/Faculty/FacultyLogin");
     }

     function handleStudent(){
        navigate("/Student/Register");
     }
      return(
        <div>
        {
            location.pathname==="/"?<div>
            <button onClick={handleFaculty}>Faculty Login</button>
            <button onClick={handleStudent}>Student Login</button>
        </div>:""
        }
        

        <Routes>
            <Route path="/Faculty/FacultyLogin" element={<FacultyLogin from="Home" />}></Route>
            <Route path="/Faculty/Jobs/FacultyLogin" element={<FacultyLogin from="Joblist" />}></Route>
            <Route path="/Student/Register" element={<Register />}></Route>
            <Route path="/Faculty/InternJob" element={<InternJob />}></Route>
            <Route path="/Faculty/Job" element={<Job />}></Route>
            <Route path="/Faculty/FacultyHome" element={<FacultyHome />}></Route>
            <Route path="/Joblist" element={<Joblist />}></Route>
            <Route path='/Faculty/RegData' element={<RegData />} ></Route>
        </Routes>
        </div>
      )
}

export default Home;