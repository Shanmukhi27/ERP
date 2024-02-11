import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RegData() {
  const [branch, setBranch] = useState('');
  const [students,setStudents]=useState([]);


  const handleBranch = (e) => {
    setBranch(e.target.value);
  };

  function handleSubmit(event){
    console.log(document.getElementById("year").value);
   event.preventDefault();
   axios.post("http://localhost:4500/getRegData",{
      branch:branch,
      year:document.getElementById("year").value
    }).then(res=>{
         console.log(res.data);
         setStudents(res.data);
    })
    

  }

  return (
    <div>
      <label>
        Select Branch:
        <select onChange={handleBranch}>
          <option value="CSE">CSE</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          <option value="mechanical">Mechanical</option>
          <option value="civil">Civil</option>
          <option value="chemical">Chemical</option>
          <option value="metallurgy">Metallurgy</option>
        </select>
      </label>
      <label>
        Select Year:
        <select id="year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <button type='submit' onClick={handleSubmit}>GetDetails</button>
      <div>
        {
          students.length>0 ? students.map(student=>{
           <div>
                  <label>
                    Name:
                    <p>{student.Name}</p>
                  </label>
              </div>
          }):""
        }
      </div>
    </div>
  );
}

export default RegData;
