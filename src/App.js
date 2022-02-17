import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Topbar from './Topbar';
import Start from './Start';
import View from './View';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Create />
    </div>
  );
}

export default App;
