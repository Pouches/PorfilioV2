const BigCard =(props)=>{
    return(
        <div className="BigCard" >
            <p className="cardTitle">{props.title}
            <hr/></p>
            <p>{props.text}</p>
            <a href={props.downloadItem} target={props.target} download>{props.downloadText}</a>
            <img src={props.Image}></img>
        </div>
    )
}
BigCard.defaultProps = {
    text:'Filler text',
    title:'Default Title',
    Image:'',
    ImageSize:'5%',
    downloadItem:'',
    downloadText:'',
    target:'blank'
}

export default BigCard