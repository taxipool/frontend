import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './Main';
import Login from './Login';
import './App.css';
import Topbar from './Topbar';
import Traffic from './TrafficLight';

function App() {
  // if (window.location === '/') {
  //   document.getElementById("header").style.display === "none";
  // };
  return (
    <BrowserRouter>
      <Topbar />
      <Traffic />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;