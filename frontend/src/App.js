
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import Axios from "axios";
import CDC from "./Faculty/CDC";


function App() {
   
  const navigate=useNavigate();
 
  const location=useLocation();
  console.log(location.pathname); 
  function handleSubmit(event){
    event.preventDefault();
    // const email=document.getElementById('email').value;
    // const password=document.getElementById('password').value;
    // Axios.post("http://localhost:4500/checkStudent",{
    //   Email:email,
    //   Password:password
    // }).then(res=>{
    //   console.log(res.data);
    //   if(res.data==="exists"){
    //      navigate("/App/CDC");
    //   }else{
    //     alert(res.data);
    //   }
    // })
    navigate("/CDC");
  }

  return (
    <div>
     
     
        <div>
           <div>
      <label for="clgmail">College EmailID:</label>
      <input id='email' type="email"  placeholder="Enter Email" />
      </div>
      <div>
      <label for="Password">Password:</label>
      <input id='password' type="password" placeholder="Enter Password" />
      </div>
       <button onClick={handleSubmit} type="submit">Login</button>
          </div>
    
     
      <Routes>
        <Route path="/CDC" element={<CDC />} />
      </Routes>


    </div>
  );
}

export default App;
