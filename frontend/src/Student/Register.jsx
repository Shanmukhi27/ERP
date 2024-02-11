import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    Roll: '',
    email: '',
    password: '',
    Branch: '',
    year: '',
    regNo: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleRegister = async () => {
//     try {
//       // Send the request to the correct endpoint ('http://localhost:8000/registration')
//       const response = await axios.post('http://localhost:4500/registration', {
//         firstName: formData.firstName,
//         Roll: formData.Roll,
//         email: formData.email,
//         password: formData.password,
//         Branch: formData.Branch,
//         year: formData.year, // Added Year field
//         regNo: formData.regNo, // Added Reg No. field
//       });

//       if (response.data === 'exist') {
//         alert('User already exists');
//       } else if (response.data === 'notexist') {
//         console.log('Registration successful');
//       }
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//       console.error(error);
//     }
//   };
function handleRegister(){
    axios.post("http://localhost:4500/registration",{
        firstName: formData.firstName,
               Roll: formData.Roll,
                email: formData.email,
                password: formData.password,
                Branch: formData.Branch,
                year: formData.year, // Added Year field
              regNo: formData.regNo,
    }).then(res=>{
        alert(res.data);
        setFormData({
          firstName: '',
          Roll: '',
          email: '',
          password: '',
          Branch: '',
          year: '',
          regNo: '', 
        });
    })
}

  return (
    <div>
      <h1>Registration Form</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Roll No.:
          <input
            type="number"
            name="Roll"
            value={formData.Roll}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Branch:
          <input
            type="text"
            name="Branch"
            value={formData.Branch}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          {/* <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          /> */}
          <select name='year'  value={formData.year} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
        <br />
        <label>
          Reg No.:
          <input
            type="number"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Receipt:
          <input type="file" name="receipt" />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;