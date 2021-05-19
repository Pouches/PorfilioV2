import BigCard from '../components/BigCard'
import '../components/BodyCard'
let TextFile = require("../texts/texts.json")

const BodyCard =()=>{
    return(
        <div className="BodyCard">
            <BigCard text={TextFile.mainPage.mainBody}></BigCard>
        </div>
    )
}
export default BodyCard