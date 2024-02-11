import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate,Route,Routes} from "react-router-dom";
import FacultyLogin from './Faculty/FacultyLogin';

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    
    axios.get("http://localhost:4500/job-details")
      .then(res => {
        setJobDetails(res.data); 
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
        
      });
  }, []); 

  function handleAdd(){
    navigate("/Faculty/Jobs/FacultyLogin");
  }

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <h2>Job Details</h2>
      {jobDetails.map((job, index) => (
        <div style={{"border":"solid 1px"}} key={index} class="joblist">
          <h3>{job.CName}</h3>
          <p>Job Title: {job.job}</p>
          <p>Description: {job.descr}</p>
          <p>Eligibility: {job.eligibility}</p>
          <p>Salary: {job.Salary}</p>
          <p>Perks: {job.Perks}</p>
         
        </div>
      ))}
      <Routes>
        <Route path="/Faculty/Jobs/FacultyLogin" element={<FacultyLogin from="joblist" />}></Route>
      </Routes>
    </div>
  );
};

export default JobDetails;