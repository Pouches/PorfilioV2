import BigCard from "./BigCard"
import Resume from '../texts/Resuume.pdf'

const ResumePage = ()=>{
    return(
        <div className="resumePage">
            <BigCard title="Resume" downloadItem='../texts/Resuume.pdf' downloadText="Download Resume">
            </BigCard>
        </div>
    )
}
export default ResumePage