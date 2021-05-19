const BigCard =(props)=>{
    return(
        <div className="BigCard" >
            <p className="cardTitle">{props.title}</p>
            <hr/>
            <p>{props.text}</p>
        </div>
    )
}
BigCard.defaultProps = {
    text:'Filler text',
    title:'Default Title'
}

export default BigCard