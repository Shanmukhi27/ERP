import React from 'react';
import {useNavigate,Route,Routes} from "react-router-dom";
import Job from "./Job";
import Joblist from "../Joblist";
import RegData from './RegData';

function FacultyHome(){
    const navigate=useNavigate();
    function handleJobs(){
        // navigate("/Faculty/Job")
        navigate("../Joblist");
    }

    function handleRegistrationdetails(){
        navigate("/Faculty/RegData");
    }
  return(
    <div>
        <button onClick={handleJobs}>Job</button>
        <button onClick={handleRegistrationdetails}>Registered Students</button>

        <Routes>
             {/* <Route path='/Faculty/Job' element={<Job/>} ></Route> */}
             <Route path='../Joblist' element={<Joblist/>} ></Route>
             <Route path='/Faculty/RegData' element={<RegData />} ></Route>
             
        </Routes>
    </div>
  )
}
export default FacultyHome;