import logo from '../logo.svg';
import '../App.css';
import './Navigation Bar'
import NavBar from './Navigation Bar';
import './BigCard';
import './SmallCard'
import BigCard from './BigCard'
import SmallCard from './SmallCard';
import './SmallCardContainer'
import Image1 from '../test-content/test1.jpg';
import Image2 from '../test-content/test2.jpg';
import SmallCardContainer from './SmallCardContainer';
import './ContactButton'
import ContactButton from './ContactButton';
import './IndexPage'
let FileText =  require('../texts/texts.json')
const IndexPage = ()=>{
    return(
        <div className="index">
        <BigCard text={FileText.mainPage.section1.mainBody} title={FileText.mainPage.section1.title} Image='./test-content/test1.jpg'></BigCard>
        <SmallCardContainer card1Text="hi" card2Image={Image1}></SmallCardContainer>
        </div>
    )
}
export default IndexPage