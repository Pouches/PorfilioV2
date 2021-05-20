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
let FileText =  require('./texts/texts.json')
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BigCard text={FileText.mainPage.section1.mainBody} title={FileText.mainPage.section1.title} Image='./test-content/test1.jpg'></BigCard>
      <SmallCardContainer card1Text="hi" card2Image={Image1}></SmallCardContainer>
      <BigCard text={FileText.mainPage.section1.mainBody} title={FileText.mainPage.section1.title} Image='./test-content/test1.jpg'></BigCard>
      <SmallCardContainer card1Text="hi" card2Image={Image1} card3Image={Image2}></SmallCardContainer>      
      <BigCard text={FileText.mainPage.section1.mainBody} title={FileText.mainPage.section1.title} Image='./test-content/test1.jpg'></BigCard>
    </div>
  );
}

export default App;
