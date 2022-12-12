import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./component/LoginForm"
import LoginForm from './component/LoginForm';
import RegisterForm from "./component/RegisterForm";

function App() {



  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<LoginForm />}/>
          <Route path="/LoginForm" element={<LoginForm />}/>
          <Route path="/RegisterForm" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
