import logo from './logo.svg';
import './App.css';
import './components/Navigation Bar'
import NavBar from './components/Navigation Bar';
import './components/BigCard';
import BigCard from './components/BigCard'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BigCard></BigCard>
      <BigCard></BigCard>
      <BigCard></BigCard>
      <BigCard></BigCard>

    </div>
  );
}

export default App;
