import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Main from './Main';
import Login from './Login';
import './App.css';
import Topbar from './Topbar';
import Start from './Start';
import Update from './Update';
import Traffic from './TrafficLight';
import Signup from './Signup';
import View from './View';
import Create from './Create';
// import $ from 'jquery';

function App() {
  const [isLogin, setIsLogin] = useState(false)
 
  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
      console.log('isLogin ?? :: ', isLogin)
    } else {
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
      if ( window.location.pathname == '/' ) {
        window.location.href = '/main';
   }
    }
  })
  
  return (
    <BrowserRouter>
      <Topbar />
      <Traffic />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="login/*" element={<Login />} />
        <Route path="main/*" element={<Main />} />
        <Route path="signup/*" element={<Signup />} />
        <Route path="view/*" element={<View />} />
        <Route path="update/*" element={<Update />} />
        <Route path="create/*" eleement={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;