import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./component/LoginForm"
import LoginForm from './component/LoginForm';
import ForgotPass from "./component/ForgotPass";
import Homepage from './component/homepage';

function App() {

  const [ user, setLoginUser] = useState({
      rNum:"",
      dob:"",
      pass:""
  })
  console.log(user._id)
  

  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <LoginForm setLoginUser={setLoginUser}/>}/> 
          <Route path="/LoginForm" element={<LoginForm setLoginUser={setLoginUser}/>}/>
          <Route path="/Forgotpassword" element={<ForgotPass/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
