import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './Main';
import Login from './Login';
import './App.css';
import Topbar from './Topbar';
import Start from './Start';
import Update from './Update';
import Traffic from './TrafficLight';
import Signup from './Signup';
import View from './View';

function App() {
  // if (window.location === '/') {
  //   document.getElementById("header").style.display === "none";
  // };
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;