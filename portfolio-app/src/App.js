import logo from './logo.svg';
import './App.css';
import './components/Navigation Bar'
import NavBar from './components/Navigation Bar';
import './components/BigCard';
import BigCard from './components/BigCard'
import './components/BodyCard'
import BodyCard from './components/BodyCard'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BodyCard></BodyCard>
    </div>
  );
}

export default App;
