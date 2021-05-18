import BigCard from '../components/BigCard'
import '../components/BodyCard'
const BodyCard =()=>{
    return(
        <div className="BodyCard">
            <BigCard text="test"></BigCard>
            <BigCard text="Test 2"></BigCard>
            <BigCard text="Test 3"></BigCard>
            <BigCard text="Test 4"></BigCard>
        </div>
    )
}
export default BodyCard