import './SmallCard'
import SmallCard from './SmallCard'
const SmallCardContainer=(props)=>{
    return(
        <div className="SmallCardContainer">
            <SmallCard text={props.card1Text} image={props.card1Image}></SmallCard>
            <SmallCard text={props.card2Text} image={props.card2Image}></SmallCard>
            <SmallCard text={props.card3Text} image={props.card3Image}></SmallCard>
        </div>
    )
}
export default SmallCardContainer