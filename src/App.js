import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Topbar from './Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Login />
    </div>
  );
}

export default App;
