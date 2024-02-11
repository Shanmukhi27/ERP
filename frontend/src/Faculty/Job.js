import React, { useState } from 'react';
import axios from 'axios';

function Job() {
  const [formData, setFormData] = useState({
    CName: '',
    job: '',
    type:'',
    descr: '',
    eligibility: '',
    Salary: '',
    Perks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(){
    axios.post("http://localhost:4500/job", {
      CName: formData.CName,
      job: formData.job,
      type:formData.type,
      descr: formData.descr,
      eligibility: formData.eligibility,
      Salary: formData.Salary,
      Perks: formData.Perks,
    })
    .then(res => {
      alert(res.data);
      setFormData({
        CName: '',
        job: '',
        type:'',
        descr: '',
        eligibility: '',
        Salary: '',
        Perks: '',
      });
    })
    
  };

  return (
    <div>
      <h1>Job Form</h1>

      <form>
        <label>
          Company Name:
          <input
            type="text"
            name="CName"
            value={formData.CName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Type:
          <select name="type" onChange={handleChange}  >
          <option value="">Select Type</option>
            <option value="Internship">Internship</option>
            <option value="Job">Job</option>
          </select>
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="descr"
            value={formData.descr}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Eligibility:
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
          />
         
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Perks:
          <input
            type="text"
            name="Perks"
            value={formData.Perks}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Job;