import './App.css';
import Login from './Login';
import Topbar from './Topbar';
import Traffic from './TrafficLight';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Traffic />
      <Login />
    </div>
  );
}

export default App;
