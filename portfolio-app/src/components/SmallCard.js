const SmallCard =(props)=>{
    return(
        <div className="SmallCard">
            <p>{props.text}</p>
            <img src={props.image}></img>
        </div>
    )
}
SmallCard.defaultProps={
    text:'This is a small Card',
    image:''
}
export default SmallCard