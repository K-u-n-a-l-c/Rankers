import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./component/LoginForm"
import LoginForm from './component/LoginForm';
import ForgotPass from "./component/ForgotPass";

function App() {



  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<LoginForm />}/>
          <Route path="/LoginForm" element={<LoginForm />}/>
          <Route path="/Forgotpassword" element={<ForgotPass/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
