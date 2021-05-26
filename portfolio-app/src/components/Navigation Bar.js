let IndexFunc = () =>{
    document.getElementsByClassName('index')[0].style.visibility='visible';document.getElementsByClassName('resumePage')[0].style.visibility='hidden';document.getElementsByClassName('previous')[0].style.visibility='hidden';
    document.getElementsByClassName('index')[0].style.display='inline-block';document.getElementsByClassName('resumePage')[0].style.display='none';document.getElementsByClassName('previous')[0].style.display='none';
}
let ResumeFunc = ()=>{
    document.getElementsByClassName('index')[0].style.visibility='hidden';document.getElementsByClassName('resumePage')[0].style.visibility='visible';document.getElementsByClassName('previous')[0].style.visibility='hidden';
    document.getElementsByClassName('index')[0].style.display='none';document.getElementsByClassName('resumePage')[0].style.display='inline-block';document.getElementsByClassName('previous')[0].style.display='none';
}
let PreviousFunc = ()=>{
    document.getElementsByClassName('index')[0].style.visibility='hidden';document.getElementsByClassName('resumePage')[0].style.visibility='hidden';document.getElementsByClassName('previous')[0].style.visibility='visible';
    document.getElementsByClassName('index')[0].style.display='none';document.getElementsByClassName('resumePage')[0].style.display='none';document.getElementsByClassName('previous')[0].style.display='inline-block';

}
const NavBar =()=>{
    return(
        <div className="NavBar">
            <table>
                <tr>
                <td className="NameCard">Cade Brown</td>
                <td className="LinkCard" onClick={IndexFunc}>Index</td>
                <td className="LinkCard" onClick={ResumeFunc}>Resume</td>
                <td className="LinkCard" onClick={PreviousFunc}>Previous Works</td>
                </tr>
            </table>
        </div>
    )
}

export default NavBar