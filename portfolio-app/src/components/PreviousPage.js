import BigCard from "./BigCard"
import SmallCardContainer from "./SmallCardContainer"
import Image4 from './images/Password Manger login.JPG'
import Image5 from './images/Pass manager home screen.JPG'
import Image6 from './images/calendar.JPG'
import SmallCard from "./SmallCard"
const PreviousPage = ()=>{
    return(
        <div className="previous">
            <BigCard title="Previous Works" ></BigCard>\
            <SmallCardContainer card1Text="A password manager themed around the game 'the Division', created by ubisoft" card1Image card2Text="Login screen " card3Text="Passwords page " card2Image={Image4} card3Image={Image5}></SmallCardContainer>
            <SmallCardContainer card1Text="A calendar themed around the game 'the Division', created by ubisoft" card2Image={Image6} card2Text=' ' card3Text="It displays upcoming events and allows you too add events to it, it is synced with google calnedar"></SmallCardContainer>
        </div>
    )
}
export default PreviousPage;