import logo from './logo.svg';
import './App.css';
import './components/Navigation Bar'
import NavBar from './components/Navigation Bar';
import './components/BigCard';
import './components/SmallCard'
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard';
import './components/SmallCardContainer'
import Image1 from './test-content/test1.jpg';
import Image2 from './test-content/test2.jpg';
import SmallCardContainer from './components/SmallCardContainer';
import './components/ContactButton'
import ContactButton from './components/ContactButton';
import './components/IndexPage';
import IndexPage from './components/IndexPage';
import PreviousPage from './components/PreviousPage';
import ResumePage from './components/ResumePage';
import './components/ResumePage'
let FileText =  require('./texts/texts.json')


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <NavBar></NavBar>
      <IndexPage></IndexPage>
      <ResumePage></ResumePage>
      <PreviousPage></PreviousPage>
      <ContactButton></ContactButton>
    </div>
  );
}

export default App;
