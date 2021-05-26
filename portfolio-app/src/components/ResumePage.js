import BigCard from "./BigCard"
// import Resume from '../texts/Resume.pdf'
import pdf from '../pdfs/Resume.pdf';
const ResumePage = ()=>{
    return(
        <div className="resumePage">
            <BigCard title="Resume" downloadItem={pdf} downloadText="Download Resume" text="">
            </BigCard>
        </div>
    )
}
export default ResumePage