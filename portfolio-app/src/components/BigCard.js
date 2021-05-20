const BigCard =(props)=>{
    return(
        <div className="BigCard" >
            <p className="cardTitle">{props.title}
            <hr/></p>
            <p>{props.text}</p>
            <img src={props.Image}></img>
        </div>
    )
}
BigCard.defaultProps = {
    text:'Filler text',
    title:'Default Title',
    Image:'',
    ImageSize:'5%'
}

export default BigCard