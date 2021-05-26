import logo from '../logo.svg';
import '../App.css';
import './Navigation Bar'
import NavBar from './Navigation Bar';
import './BigCard';
import './SmallCard'
import BigCard from './BigCard'
import SmallCard from './SmallCard';
import './SmallCardContainer'
import Image1 from './images/20210521_132940.jpg';
import Image2 from './images/IMG_20191102_210412.jpg';
import Image3 from './images/IMG_20191026_195957.jpg';
import SmallCardContainer from './SmallCardContainer';
import './ContactButton'
import ContactButton from './ContactButton';
import './IndexPage'
let FileText =  require('../texts/texts.json')
const IndexPage = ()=>{
    return(
        <div className="index">
        <BigCard text={FileText.mainPage.section1.mainBody} title={FileText.mainPage.section1.title} ></BigCard>
        <SmallCardContainer card1Text="" card2Text="" card3Text="" card1Image={Image2} card2Image={Image1} card3Image={Image3}></SmallCardContainer>
        </div>
    )
}
export default IndexPage